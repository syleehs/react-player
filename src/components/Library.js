import React from "react";
import LibrarySong from "./LibrarySong";
const Library = ({
  songs,
  currentSong,
  setCurrentSong,
  audioRef,
  isPlaying,
}) => {
  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            song={song}
            currentSong={currentSong}
            setCurrentSong={setCurrentSong}
            audioRef={audioRef}
            isPlaying={isPlaying}
            key={song.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
