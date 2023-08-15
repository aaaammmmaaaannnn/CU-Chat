import React from "react";
import Attach from '../image/attach.png';
import Img from '../image/img.png';

const input = () => {
    return (
        <div className="input">
            <input type="text" placeholder="Type something...." />
            <div className="send">
                <img src={Attach} alt="" />
                <input type="file" style={{display:"none"}} id="file" />
                <label htmlFor="file">
                    <img src={Img} alt="" />
                </label>
                <button>Send</button>
            </div>
        </div>
    )
}

export default input;