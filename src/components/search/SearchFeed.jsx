import { useSearchParams } from "react-router-dom";
import { useSearch } from "../../hooks/useSearch";
import { Fragment, useEffect } from "react";
import { Alert } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import { VideoItem } from "../../videos/VideoItem";
import { Spinner } from "../spinner/Spinner";
import './search.css'

export const SearchFeed = () => {
    const [searchParams] = useSearchParams()
    const query = searchParams.get("q")

    const { data, isFetching, setParams, fetchNextPage, hasNextPage } = useSearch()

    useEffect(() => {
        setParams((__params) => ({ ...__params, keywords: query }))
    }, [setParams, query])

    console.log(data);
    return (
        <div className="search-container">
            {data.map(({ data: { videos } }, idx) => {
                return !videos.length ? (
                    <div className="error-message" key={idx}>
                        <Alert severity="error">Nothing for {query}</Alert>
                    </div>
                ) : (
                    <Fragment key={idx}>
                        <InfiniteScroll
                            dataLength={videos.length}
                            scrollThreshold={"600px"}
                            hasMore={hasNextPage}
                            next={fetchNextPage}
                        >
                            <div className="search-feed">
                                {videos.map((video) => <VideoItem key={video.video_id} {...video} />)}
                            </div>
                        </InfiniteScroll>
                    </Fragment>
                )
            })}

            {isFetching && <Spinner />}
        </div>
    );
}