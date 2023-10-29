import './singleVideo.css'
import { useNavigate, useParams } from "react-router-dom";
import { useVideo } from "../hooks/useVideo";
import { Spinner } from "../components/spinner/Spinner";
import { Close, MusicNote, } from "@mui/icons-material";
import { Video } from "./Video";
import { VideoUser } from "./VideoUser";
import { useComments } from "../hooks/useComments";

export const SingleVideo = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const { data, isLoading } = useVideo(id)
    const { comments, isCommentsLoading } = useComments({ id, cursor: 0})

    if(isLoading) return <Spinner />

    const { 
        origin_cover: cover, 
        hdplay, author, 
        music_info: { title: songTitle },
        title 
    } = data


    const handleClose = () => {
        navigate(-1)
    }

return (
<div className="single-video">
    <div className="single-video__close" onClick={handleClose}>
        <Close />
    </div>

    <div className="single-video__item"
    style={{ backgroundImage: `url(${cover})`, backgroundRepeat: "no-repeat"}}
    disabled={true}
    >
        <Video url={hdplay} disabled={true} />
    </div>

    <div className="single-video__info">
        <div className="single-video__description">
            <VideoUser {...author} />
            <div className="single-video__title">{title}</div>
            <div className="single-video__song">
                <MusicNote />
                <span>{songTitle}</span>
            </div>
        </div>
        {isCommentsLoading ? (
            <Spinner />
        ) : comments.length ? (
            <ul className="single-video__coments">
                {comments.map(({ user, text, id}) => (
                    <li key={id} className="single-video__comment">
                        <VideoUser {...user} />
                        <div className="single-video__text">{text}</div>
                    </li>
                ))}
            </ul>
        ) : (
            <p>No comments</p>
        )
        }
    </div>
</div>
);
}