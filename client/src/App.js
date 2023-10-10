
import React from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import { useLocation } from "react-router-dom";
import VideoJS from "./Video";

const App = () => {
  const playerRef = React.useRef(null);
  const mp = useLocation().state.fileUrl;
  const sp = mp.replace("mp4", "vtt").replace("alljs.ir", "albertcamus.website");
  const pi = mp.replace("mp4", "jpg").replace("alljs.ir", "albertcamus.website");
  const videoJsOptions = {
    autoplay: true,
    crossorigin: "anonymous",
    controls: true,
    responsive: true,
    fluid: true,
    poster: pi,
    sources: [
      {
        src: mp,
        type: "video/webm",
      },
    ],
   tracks: [
      {
        kind: 'captions',
        src: sp,
        srcLang: 'fa',
	label: 'Persian',
        default: true    
      },
    ],
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };

    return (
    <div className="video_player_container">
      <a className="download_movie" href={mp} download>
        دانلود
      </a>
      <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
    </div>
  );
};

export default App;
