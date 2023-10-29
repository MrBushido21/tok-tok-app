import { useParams } from "react-router-dom"
import { useUser } from "../../hooks/useUser"
import './user.css'
import { Alert } from "@mui/material"
import { Spinner } from "../spinner/Spinner"
import { formatCompactNum, replaceWithBr } from "../../utils/common"
import  InstagramIcon  from "@mui/icons-material/Instagram"
import  TwitterIcon  from "@mui/icons-material/Twitter"
import  YouTubeIcon  from "@mui/icons-material/YouTube"
import  LockIcon  from "@mui/icons-material/Lock"
import { Fragment } from "react"
import { UserTabs } from "./UserTabs"

export const User = () => {
    const { uniqueId } = useParams()
    const { data, isLoading, code, error } = useUser(uniqueId)

    if(code === -1) {
        return (<Alert severity="error">
            {error}
        </Alert>)
    }

    if(isLoading) return <Spinner />

    const { 
        stats: { followingCount, followerCount, heartCount, videoCount}, 
        user: { avatarMedium, 
            nickname, 
            youtube_channel_id: youtubeId, 
            twitter_id: twitterId,
            ins_id: insId,
            signature,
            privateAccount,
            openFavorite
        }, 
    } = data;

    const statsData = [
    {
        text: "Following",
        count: followingCount
    },
    {
        text: "Followers",
        count: followerCount
    },
    {
        text: "Likes",
        count: heartCount
    },
    {
        text: "Videos",
        count: videoCount
    },
]

const socialsData = [
    {
        link: `https://youtube.com/`,
        icon: <YouTubeIcon />,
        id: insId
    },
    {
        link: `https://twitter.com/`,
        icon: <TwitterIcon />,
        id: twitterId
    },
    {
        link: `https://instagram.com/`,
        icon: <InstagramIcon />,
        id: youtubeId
    },
]

const hasSocials = socialsData.some(({ id }) => id)

return ( 
<div className="user">
    <div className="user-top">
        <div 
        className="user-avatar"
        style={{ backgroundImage: `url(${avatarMedium})`, width: "75px", height: "75px"}}
        />
        <div className="user-info">
            <div className="user-unique">{uniqueId}</div>
            <div className="user-nickname">{nickname}</div>
        </div>
        <ul className="user-stats">
            {statsData.map(({ text, count }) => 
                <li key={text} className="user-stats__item">
                    <span>{formatCompactNum(count)}</span>
                    <p>{text}</p>
                </li>
            )}
        </ul>
        {!signature ? <p>No bio yet.</p> : (
            <div className="user-signature" 
            dangerouslySetInnerHTML={{ __html: replaceWithBr(signature) }}
            />
        )}
        {hasSocials && (
            <ul className="user-socials">
                {socialsData.map(({ link, icon, id }) => {
                    const href = `${link}/${id}`

                    return id ? (
                        <li className="user-socials__item" key={href}>
                            <a href={href} target="_blank">
                                {icon}
                            </a>
                        </li> 
                    ) : (
                        <Fragment key={href}/>
                    )
                })}
            </ul>
        )}
    </div>
    {!privateAccount  ? (
        <UserTabs openFavorite={openFavorite}/>
    ) : (
    <p>This account is private <LockIcon /></p>
    )
}
</div>
);
}