import React, { useRef } from 'react'
import './VideoPlayer.css'
import video from '../../assets/clg-video.mp4'
const VideoPlayer = ({playState,setPlayState}) => {

    const player=useRef(null);

    const close = (e) =>{
        if(e.target===player.current){
            setPlayState(false);
        }
    }

  return (
    <div className={`videoP ${playState?'':'hide'}`} ref={player} onClick={close}> 
      <video src={video} autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer
