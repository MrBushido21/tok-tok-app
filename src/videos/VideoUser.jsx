import { Link } from "react-router-dom";
import './video.css'

export const VideoUser = ({ unique_id: uniqueId, nickname, avatar }) => {
    return (
        <Link to={`/user/${uniqueId}`} className="vidoe-author">
            <div className="vidoe-author__image"
                style={{ backgroundImage: `url(${avatar})` }}
            />
            <div className="vidoe-author__info">
                <p>{nickname}</p>
                <span>{uniqueId}</span>
            </div>
        </Link>
    );
}