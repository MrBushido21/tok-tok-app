import { PlayArrow } from "@mui/icons-material";
import { Video } from "./Video";
import { formatCompactNum } from "../utils/common";

export const VideoUserItem = ({ video_id: videoId, play, title, play_count: playCount}) => {
return (
<div className="video">
    <Video videoId={videoId} url={play} />
    <div className="video-play__count">
        <PlayArrow />
        <span>{formatCompactNum(playCount)}</span>
    </div>
</div>
);
}