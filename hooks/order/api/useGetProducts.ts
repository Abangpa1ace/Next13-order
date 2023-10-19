import { axiosInstance } from "@/api/axios";
import { useQuery } from "react-query";

const fetch = async (category: string) => {
  return await axiosInstance.get('/products', {
    params: { category },
  });
}

const QUERY_KEY = 'useGetProducts';

interface Options {
  category: string;
}

const useGetProducts = ({ category }: Options) => {
  const { data, isLoading } = useQuery([QUERY_KEY, category], () => fetch(category), {
    select: (res) => res.data.data,
    refetchOnWindowFocus: false,
    retry: 1,
  })

  return { data: data || [], isLoading }
}

export default useGetProducts;