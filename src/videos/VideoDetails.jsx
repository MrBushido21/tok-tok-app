import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { formatCompactNum } from "../utils/common";

export const VideoDetails = ({
    play_count: playCount,
    digg_count: diggCount,
    comment_count: commentCount,
    share_count: shareCount,
    }) => {

    const details = [
        {
            icon: <PlayArrowIcon />,
            count: playCount
        },
        {
            icon: <ChatBubbleIcon />,
            count: commentCount
        },
        {
            icon: <ShareIcon />,
            count: shareCount
        },
        {
            icon: <FavoriteIcon />,
            count: diggCount
        },
    ]

    return (
        <ul className="video-details">
            {details.map(({ icon, count }, i) => (
                <li key={i} className="video-details__item">
                    {icon}
                    <p>{formatCompactNum(count)}</p>
                </li>
            ))}
        </ul>
    );
}