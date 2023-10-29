import { useQuery } from "@tanstack/react-query"
import { request } from "../utils/common"
import { REGION } from "../utils/constans"

const getFeed = async () => {
    const response = await request({
        path: `feed/list?region=${REGION}&count=20`
    })

    return response
}

export const useFeed = () => {
    const {data, isLoading } = useQuery({
        queryKey: ['feed'],
        queryFn: getFeed
    })

    return { data: data?.data || [], isLoading}
}