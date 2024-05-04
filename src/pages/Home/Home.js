import React, { useState } from "react";
import AudioPlayer from 'react-h5-audio-player';

import music from "../../assets/sounds/green-sky.mp3";
import HomeLayout from "../../assets/layouts/home"
import MutableComponent from "../../composer/MutableComponent";



const  Home = () => {
    const [musica] = useState(music);

    return (
        <>
            <MutableComponent 
                display={HomeLayout}
            />
            <AudioPlayer
                autoPlay={true}
                src={musica}
                showSkipControls={false}
                showJumpControls={false}
                loop={true}
                style={{ display: 'none' }}
            />
        </>
    );
}
export default Home;