import { factory, primaryKey } from '@mswjs/data'
import Cookies from 'js-cookie'

const models = {
  user: {
    id: primaryKey(String),
    name: String,
    password: String,
    cart: String,
    createdAt: Number
  }
}

export const db = factory(models)
export type Model = keyof typeof db

export const loadDb = () =>
  Object.assign(JSON.parse(Cookies.get('msw-db') || '{}'))

export const persistDb = (model: Model) => {
  if (process.env.NODE_ENV === 'test') return

  const data = loadDb()
  // @ts-ignore
  data[model] = db[model].getAll()
  Cookies.set('msw-db', JSON.stringify(data))
}

export const initializeDb = () => {
  const database = loadDb()

  Object.entries(db).forEach(([key, model]) => {
    const dataEntries = database[key]

    if (dataEntries) {
      dataEntries?.forEach((entry: Record<string, any>) => {
        model.create(entry)
      })
    }
  })
}

export const resetDb = () => {
  Cookies.remove('msw-db')
}

initializeDb()
