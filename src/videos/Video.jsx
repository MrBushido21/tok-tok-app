import { useRef, useState } from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

import PauseIcon from "@mui/icons-material/Pause"
import PlayCircleIcon from "@mui/icons-material/PlayCircle"
import { Spinner } from "../components/spinner/Spinner";

export const Video = ({ url="", videoId, width="100%", height="100%" }) => {

    const videoRef = useRef(null)
    const [isReady, setReady] = useState(false)
    const [isPlaying, setPlaying] = useState(false)
    const [progress, setProgress] = useState(0)

    const handleClick = () => {
        setPlaying(!isPlaying)
        videoRef?.current?.parentElement.classList.toggle('playing', !isPlaying)
    }

    const handleProgress = ({ loaded, played }) => {
        if(!loaded) return

        setProgress(played * 100)
    }

return (
<div className={`video-item ${isPlaying ? 'playing' : '' }` } ref={videoRef}>
    {!isReady && (
        <div className="video-item__loading">
            <Spinner />
        </div>
    )}
    <Link to={`${videoId ? `/video/${videoId}` : ''}`}>
        <ReactPlayer 
        playing={isPlaying}
        loop={true}
        url={url}
        width={width}
        height={height}
        onProgress={handleProgress}
        onReady={() => setReady(true)}
        />
    </Link>
    <div className="video-item__controls" onClick={handleClick}>
        {isPlaying ? <PauseIcon /> : <PlayCircleIcon  />}
    </div>
    <div className="video-progress">
        <span style={{ width:`${progress}%`}}/>
    </div>
</div>
);
}