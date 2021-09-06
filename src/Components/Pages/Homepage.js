import React from 'react'
import video1 from "../video/video.mp4";
import "./Homepage.css";

function Homepage() {
    return (
        <div>
                 <video className="video" autoPlay loop muted>
                <source className="video" src={video1} type="video/mp4"/>
                </video>
        </div>
    )
}

export default  Homepage
