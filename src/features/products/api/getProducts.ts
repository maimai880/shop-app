import { axios } from '@/lib/axios'
import { useQuery } from '@tanstack/react-query'
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query'
import { ProductType } from '../types'

export const getProducts = ({
  query
}: {
  query?: string
}): Promise<ProductType[]> => {
  return axios.get(`/products?q=${query}`)
}

type QueryFnType = typeof getProducts

type UseProductsOptions = {
  query?: string
  config?: QueryConfig<QueryFnType>
}

export const useProducts = ({ query, config }: UseProductsOptions = {}) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['products', query],
    queryFn: () => getProducts({ query })
  })
}
