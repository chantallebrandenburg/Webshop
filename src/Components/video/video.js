import React from 'react'
import video1 from "./video.mp4";

function video() {
    return (
        <div>
            <video autoPlay loop muted>
                <source src={video1} type="video/mp4"/>
            </video>
        </div>
    )
}

export default video
