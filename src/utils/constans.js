import { fetchUsersLiked, fetchUsersPosts } from "../api/api"
import { UserVideos } from "../components/user/UserVideos"

export const REGION = 'RU'

export const USER_TABS = [
    {
        slug: 'videos',
        title: 'Videos',
        content: <UserVideos type="userPosts" api={fetchUsersPosts}/>
    },
    {
        slug: 'liked',
        title: 'Liked',
        content: <UserVideos type="userLiked" api={fetchUsersLiked}/>
    }
]