import { Route, Routes } from "react-router-dom";
import { Feed } from "../components/feed/Feed";
import { SearchFeed } from "../components/search/SearchFeed";
import { User } from "../components/user/User";
import { SingleVideo } from "../videos/SingleVideo";

export const AppRoutes = () => {
return (
<Routes>
    <Route path="/" element={<Feed />} />
    <Route path="/search" element={<SearchFeed />} />
    <Route path="/user/:uniqueId" element={<User />} />
    <Route path="/video/:id" element={<SingleVideo/>} />
</Routes>
);
}