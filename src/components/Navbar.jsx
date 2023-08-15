import React from "react";
import me from '../image/me.jpg'

const Navbar = () => {
    return (
        <div className="navbar"> 
            <span className="logo"> Cu-Chat </span>
                <div className="user">
                    <img src={me} alt="me" />
                    <span>Aman</span>
                    <button>logout</button>
                </div>
        </div>
    )
}

export default Navbar;