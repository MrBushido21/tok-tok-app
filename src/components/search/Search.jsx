import SearchIcon from "@mui/icons-material/Search"
import { useEffect, useState } from "react";
import { useLocation, useMatch, useNavigate } from "react-router-dom";

export const Search = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const isMatch = useMatch("search")
    const [value, setValue] = useState("")

    const handleChange = ({ target: { value: val } }) => {
        setValue(val)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!value.trim()) return

        navigate(`/search?q=${value}`)
    }

    useEffect(() => {
        if(isMatch) return

        setValue("")
    }, [location, isMatch])

    return (
        <form className="search" onSubmit={handleSubmit}>
            <div className="search-input">
                <SearchIcon />
                <input type="text" name="search" value={value} placeholder="Search" onChange={handleChange} />
                <button>Search</button>
            </div>
        </form>
    );
}