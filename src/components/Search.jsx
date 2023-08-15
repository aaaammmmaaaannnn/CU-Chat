import React from "react";
import me from '../image/me.jpg'

const Search = () => {
    return (
        <div className="search">
            <div className="searchForm">
                <input type="text" placeholder="Find a user"/>
            </div>
            <div className="userChat">
                <img src={me} alt="me" />
                <div className="userChatInfo">
                    <span>Ram</span>
                </div>
            </div>
        </div>
    )
}

export default Search;