import { rest } from 'msw'
import { db, persistDb } from '@/mocks/db'

export const cart = [
  rest.post('/cart', async (req, res, ctx) => {
    try {
      if (!req.cookies.session) throw new Error('You are not logged in yet')

      db.user.update({
        where: {
          name: {
            equals: db.session.findFirst({
              where: { id: { equals: req.cookies.session } }
            })?.username
          }
        },
        data: {
          cart: await req.text()
        }
      })
      persistDb('user')

      return res(ctx.status(200))
    } catch (e: any) {
      return res(
        ctx.status(400),
        ctx.json({ message: e?.message || 'Server Error' })
      )
    }
  })
]
