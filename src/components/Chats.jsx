import React from "react";
import me from '../image/me.jpg'

const Chats = () => {
    return (
        <div className="chats">
            <div className="userChat">
                <img src={me} alt="me" />
                <div className="userChatInfo">
                    <span>Ram</span>
                    <p>Hello</p>
                </div>
            </div>
            <div className="userChat">
                <img src={me} alt="me" />
                <div className="userChatInfo">
                    <span>Ram</span>
                    <p>Hello</p>
                </div>
            </div>
            <div className="userChat">
                <img src={me} alt="me" />
                <div className="userChatInfo">
                    <span>Ram</span>
                    <p>Hello</p>
                </div>
            </div>
            <div className="userChat">
                <img src={me} alt="me" />
                <div className="userChatInfo">
                    <span>Ram</span>
                    <p>Hello</p>
                </div>
            </div>
            <div className="userChat">
                <img src={me} alt="me" />
                <div className="userChatInfo">
                    <span>Ram</span>
                    <p>Hello</p>
                </div>
            </div>
        </div>
    )
}

export default Chats;