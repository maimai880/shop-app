import { rest } from 'msw'
import { axios } from '@/lib/axios'
import { ProductType } from '@/features/products/types'

export const product = [
  rest.get('/products', async (req, res, ctx) => {
    const query = req.url.searchParams.get('q')

    return res(
      ctx.json(
        (
          (await axios.get(
            'https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json'
          )) as ProductType[]
        ).filter((p) =>
          query
            ? p.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
            : true
        )
      )
    )
  })
]
