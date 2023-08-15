import React from "react";
import me from '../image/me.jpg'

const Message = () => {
    return (
        <div className="message owner">
            <div className="messageInfo">
                <img src={me} alt="" />
                <span>Just now</span>
            </div>
            <div className="messageContent">
                <p>Hello</p>
                <img src={me} alt="" />
            </div>
        </div>
    )
}

export default Message;