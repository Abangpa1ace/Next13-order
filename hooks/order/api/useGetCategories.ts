import { axiosInstance } from "@/api/axios";
import { Category } from "@/types/order";
import { ApiError, ApiResponse } from "@/types/shared/axios";
import { useQuery } from "react-query";

const fetch = async () => {
  return await axiosInstance.get('/categories');
}

const QUERY_KEY = 'useGetCategories';

const useGetCategories = () => {
  const { data, isLoading } = useQuery<ApiResponse<Category[]>, ApiError, Category[]>([QUERY_KEY], fetch, {
    staleTime: Infinity,
    cacheTime: Infinity,
    select: (res) => res.data.data,
    refetchOnWindowFocus: false,
    retry: 1,
  })

  return { data: data || [], isLoading }
}

export default useGetCategories;