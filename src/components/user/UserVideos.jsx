import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchUsersPosts } from "../../api/api";
import { Spinner } from "../spinner/Spinner";
import { Alert } from "@mui/material";
import { VideoItem } from "../../videos/VideoItem";
import { VideoUserItem } from "../../videos/VideoUserItem";
import { useEffect, useState } from "react";
import { Loop } from "@mui/icons-material";

export const UserVideos = ({type, api}) => {
    const [items, setItems] = useState([])
    const [cursor, setCursor] = useState(0)
    const [currentType, setCurrentType] = useState(type);
    console.log(type);
    const { uniqueId } = useParams()

    const { data, isFetching, isError, isLoading } = useQuery({
        queryKey: [currentType, uniqueId, cursor],
        queryFn: () => api({ uniqueId, cursor }),
        keepPreviousData: true,
    })

    useEffect(() => {
        if (currentType !== type) {
            setCurrentType(type);
            setItems([]);
        } else {
            const currentVideos = data?.data?.videos || [];
            setItems((_items) => [..._items, ...currentVideos]);
        }
    }, [type, data, currentType])

    if (isLoading) return <Spinner />

    if (isError || data.code === -1) return (
        <Alert severity="error" sx={{ width: "100%" }}>
            {data?.msg || "something went wrong("}
        </Alert>
    )

    const { data: { hasMore, cursor: next } } = data

    const handleLoadMore = () => setCursor(next)
        console.log(items);
    return (
        <div className="user-wrapper">
            {items.length ? (
                <>
                <div className="user-videos">
                    {
                        items.map((video) => (
                            <VideoUserItem key={video.video_id} {...video} />
                        ))
                    }
                </div>
               <div className="loadMore">
                 {hasMore && (
                    <button 
                    onClick={handleLoadMore}
                    >
                        <Loop />
                        <span>Load More</span>
                    </button>
                )}
               </div>
               </>
            ) : (<Alert severity="info">{uniqueId} doesn`t have videos yet(</Alert>)
            }

        </div>
    );
}