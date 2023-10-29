import { useQuery } from "@tanstack/react-query"
import { request } from "../utils/common"

const getVideoComments = async ({id, cursor}) => {
    const response = await request({
        path: `comment/list?url=https://www.tiktok.com/video/${id}&count=10&cursor=${cursor}`
    })

    return response
}

export const useComments = (videoData) => {
    const {data, isLoading } = useQuery({
        queryKey: ['videoDataComments', videoData.id],
        queryFn: () => getVideoComments(videoData)
    })

    return { comments: data?.data?.comments || [], isCommentsLoading: isLoading}
}