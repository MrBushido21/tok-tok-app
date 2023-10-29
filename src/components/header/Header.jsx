import { Link } from "react-router-dom";
import { Search } from "../search/Search";
import './header.css'

export const Header = () => {
    return (
        <header className="header">
            <Link to="/">
                <h1>TOK TOK</h1>
            </Link>
            <Search />
        </header>
    );
}