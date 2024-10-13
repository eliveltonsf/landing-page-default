"use client";

import { useEffect, useRef, useState } from "react";

export default function PlayMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [isPlaying, setIsPlaying] = useState(true);

  function setPlayingState(state: boolean) {
    setIsPlaying(state);
  }

  function toggleIsPlaying() {
    setIsPlaying(!isPlaying);
  }

  useEffect(() => {
    if (!audioRef.current) {
      return;
    }
    audioRef.current.play();
  }, []);

  useEffect(() => {
    if (!audioRef.current) {
      return;
    }

    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <div className="fixed right-4 bottom-4 text-gray-300">
      <div>
        {isPlaying ? (
          <button onClick={toggleIsPlaying}>Music stop!</button>
        ) : (
          <button onClick={toggleIsPlaying}>Music Play!</button>
        )}
      </div>
      <audio
        src="/music/mil-motivos.mp3"
        autoPlay={true}
        ref={audioRef}
        onPlay={() => setPlayingState(true)}
        onPause={() => setPlayingState(false)}
      />
    </div>
  );
}
