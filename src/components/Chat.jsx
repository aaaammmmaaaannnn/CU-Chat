import React from "react";
import cam from '../image/cam.png';
import Add from '../image/add.png';
import more from '../image/more.png'
import Messages from '../components/Messages'
import Input from '../components/input';

const Chat = () => {
    return (
        <div className="chat">
            <div className="chatInfo">
                <span>Aman</span>
                <div className="chatIcons">
                    <img src={cam} alt="" />
                    <img src={Add} alt="" />
                    <img src={more} alt="" />
                </div>
            </div>
            <Messages />
            <Input />
        </div>
    )
}

export default Chat;