import { useQuery } from "@tanstack/react-query"
import { request } from "../utils/common"

const getSingleVideo = async (id) => {
    const response = await request({
        method: 'POST',
        path: "",
        body: new URLSearchParams({
            url: `https://www.tiktok.com/video/${id}`,
            hd: '1'
        })
    })

    return response
}

export const useVideo = (id) => {
    const {data, isLoading } = useQuery({
        queryKey: ['singleVideo', id],
        queryFn: () => getSingleVideo(id)
    })

    return { data: data?.data || [], isLoading}
}