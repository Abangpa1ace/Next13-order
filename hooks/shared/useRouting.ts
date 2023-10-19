import isEmpty from 'lodash/isEmpty';
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

const useRouting = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!
  const queryParams = Object.fromEntries(searchParams.entries());

  const routeQueryParams = () => {
    
  }

  const route = useCallback(
    ({
      path = '',
      query = {},
      mode = 'push'
    }: {
        path?: string;
        query?: Record<string, string | null>;
        mode?: 'push' | 'back' | 'replace' | 'prefetch'
      }) => {
      
      const currentQueryParams = new URLSearchParams(Array.from(searchParams.entries()));
      
      if (!isEmpty(query)) {
        for (const [key, value] of Object.entries(query)) {
          value ? currentQueryParams.set(key, value) : currentQueryParams.delete(key);
        }
      }
      
      const nextPath = path || pathname;
      const nextQuery = currentQueryParams.toString();
      
      router[mode](`/${nextPath}` + nextQuery ? `?${nextQuery}` : '')
    },
    [searchParams]
  )

  return { pathname, queryParams, route };
}

export default useRouting;
