import { useEffect } from "react";

import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

export default function VideoPlayer({ playVideo, hideVideoModal, videoURL }) {
  useEffect(() => {}, []);

  return (
    <>
      <ReactPlayer playing={playVideo} url={videoURL} height={750} />

      <button
        onClick={hideVideoModal}
        className="video-player-dialog-close-btn absolute right-2 top-2 md:right-10 md:top-10"
      >
        <img
          src="/images/global/close-icon.png"
          alt="close icon"
          width={35}
          height={35}
        />
      </button>
    </>
  );
}
