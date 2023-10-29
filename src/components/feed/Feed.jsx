import { MusicNote } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useFeed } from "../../hooks/userFeed";


import { VideoUser } from "../../videos/VideoUser";
import { VideoDetails } from "../../videos/VideoDetails";
import { Spinner } from "../spinner/Spinner";
import { Video } from "../../videos/Video";

export const Feed = () => {
const {data: feed, isLoading} = useFeed()

if(isLoading) return <p>Loading..</p>

return (
    !isLoading 
    ? <div className="feed">
    {feed.map(({ 
        video_id: videoId, 
        title, 
        play,
        music_info: {title: songTitle},
        author, 
        ...rest
    }) =>  {
        return (
            <div className="video" key={videoId}>
                <VideoUser {...author}/>            
    
                <div className="video-wrapper">
                    <Video url={play} videoId={videoId}/>
                    <VideoDetails {...rest}/>
                </div>
    
                <div className="video-music">
                    <span>Original: </span>
                    <MusicNote />
                    <p className="video-music__title">{songTitle}</p>
                </div>
    
                <div className="video-title">{title}</div>
            </div>
        )
    })}
    </div>
    : <Spinner />
);
}