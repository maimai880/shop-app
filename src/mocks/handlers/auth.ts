import { rest } from 'msw'
import { db, persistDb } from '@/mocks/db'
import { nanoid } from 'nanoid'

export const auth = [
  rest.get('/auth/me', (req, res, ctx) => {
    try {
      if (!req.cookies.session) throw new Error('You are not logged in yet')

      return res(
        ctx.json(
          db.user.findFirst({
            where: {
              name: {
                equals: db.session.findFirst({
                  where: { id: { equals: req.cookies.session } }
                })?.username
              }
            }
          })
        )
      )
    } catch (e: any) {
      return res(
        ctx.status(400),
        ctx.json({ message: e?.message || 'Server Error' })
      )
    }
  }),
  rest.post('/auth/register', async (req, res, ctx) => {
    try {
      if (req.cookies.session) throw new Error('You are already logged in')

      const userObj = await req.json()

      if (!(userObj.name && userObj.password)) {
        throw new Error('The login data is wrong')
      } else if (
        db.user.findFirst({ where: { name: { equals: userObj.name } } })
      ) {
        throw new Error('The user already exists')
      }

      const sessionId = nanoid()
      const user = { ...userObj, cart: '' }

      db.user.create(user)
      db.session.create({ id: sessionId, username: user.name })
      persistDb('user')
      persistDb('session')

      return res(
        ctx.json({ sessionId, user: { name: user.name, cart: user.cart } })
      )
    } catch (e: any) {
      return res(
        ctx.status(400),
        ctx.json({ message: e?.message || 'Server Error' })
      )
    }
  }),
  rest.post('/auth/login', async (req, res, ctx) => {
    try {
      if (req.cookies.session) throw new Error('You are already logged in')

      const userObj = await req.json()
      const user = db.user.findFirst({
        where: {
          name: { equals: userObj.name },
          password: { equals: userObj.password }
        }
      })

      if (!(userObj.name && userObj.password)) {
        throw new Error('The login data is wrong')
      } else if (!user) {
        throw new Error('The user is not exist')
      }

      const sessionId = nanoid()
      db.session.create({ id: sessionId, username: userObj.name })
      persistDb('session')

      return res(
        ctx.json({ sessionId, user: { name: user.name, cart: user.cart } })
      )
    } catch (e: any) {
      return res(
        ctx.status(400),
        ctx.json({ message: e?.message || 'Server Error' })
      )
    }
  }),
  rest.post('/auth/logout', (req, res, ctx) => {
    try {
      if (!req.cookies.session) throw new Error('You are not logged in yet')

      db.session.delete({ where: { id: { equals: req.cookies.session } } })
      persistDb('session')

      return res(ctx.status(204))
    } catch (e: any) {
      return res(
        ctx.status(400),
        ctx.json({ message: e?.message || 'Server Error' })
      )
    }
  })
]
