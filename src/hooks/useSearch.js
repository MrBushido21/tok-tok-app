import { useInfiniteQuery, useQuery } from "@tanstack/react-query"
import { request } from "../utils/common"
import { REGION } from "../utils/constans"
import { useState } from "react"

const getSearch = async ({ keywords, cursor }) => {
    const response = await request({
        path: `feed/search?keywords=${keywords}&count=10&cursor=${cursor}&region=${REGION}`
    })

    return response
}

export const useSearch = () => {
    const [params, setParams] = useState({
        keywords: "",
        cursor: 0
    })
    const {data, fetchNextPage, hasNextPage, isFetching } = useInfiniteQuery({
        queryKey: ['serachFeed', params.keywords],
        queryFn: ({ pageParam = params}) => getSearch(pageParam),
        getNextPageParam: ({ data }) => {
            return data?.hasMore ? { ...params, cursor: data?.cursor } : undefined
        },
        enabled: !!params.keywords
    })

    return { 
        data: data?.pages || [], 
        isFetching, 
        setParams, 
        fetchNextPage, 
        hasNextPage 
    }
}