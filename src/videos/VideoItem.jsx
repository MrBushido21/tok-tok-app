import { Video } from "./Video";
import { VideoUser } from "./VideoUser";
import './video.css'

export const VideoItem = ({ video_id: videoId, author, title, play }) => {
return (
<div className="videoItem">
   <VideoUser {...author}/>
   <Video url={play} videoId={videoId}/>
   <div className="video-title">{title}</div>
</div>
);
}