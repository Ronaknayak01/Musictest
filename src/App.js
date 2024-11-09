import React, { useState, useRef } from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
    const [songIndex, setSongIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    // const audioElement = useRef(new Audio('music-app\public\sunshine-108600.mp3'));
    const audioElement = useRef(new Audio('/sunshine-108600.mp3'));

    const progressBar = useRef(null);

    // const songs = [
    //     { songName: "Happy Vibes", filePath: 'music-app\public\sunshine-108600.mp3', coverPath: 'music-app\public\Rock.jpeg' },
    //     { songName: "Drum Beat", filePath: "music-app\public\sunshine-108600.mp3", coverPath: "music-app\public\photo-1614149162883-504ce4d13909.jpeg" },
    //     { songName: "Travel Buddy", filePath: "/travel-buddy.mp3", coverPath: "C:\Users\nayak\OneDrive\Desktop\new\music-app\src\photo-1614149162883-504ce4d13909.jpeg" },
    //     { songName: "Folk Music", filePath: "/folk-music.mp3", coverPath: "C:\Users\nayak\OneDrive\Desktop\new\music-app\src\Soft.jpeg" },
    //     { songName: "Funk Tune", filePath: "/funk-tune.mp3", coverPath: "C:\Users\nayak\OneDrive\Desktop\new\music-app\src\Rock.jpeg" },
    //     { songName: "Soulful", filePath: "/soulful.mp3", coverPath: "C:\Users\nayak\OneDrive\Desktop\new\music-app\src\playlist-neon-frame-vector-music-260nw-2037588050.webp" },
    //     { songName: "Rock Music", filePath: "/rock-music.mp3", coverPath: "C:\Users\nayak\OneDrive\Desktop\new\music-app\src\maxresdefault.jpg" },
    //     { songName: "Late Night", filePath: "/late-night.mp3", coverPath: "C:\Users\nayak\OneDrive\Desktop\new\music-app\src\night.jpeg" },
    // ];
    const songs = [
      { songName: "Happy Vibes", filePath: '/sunshine-108600.mp3', coverPath: '/best.jpeg' },
      { songName: "Drum Beat", filePath: '/sunshine-108600.mp3', coverPath: '/drum.jpeg' },
      { songName: "Travel Buddy", filePath: "/travel-buddy.mp3", coverPath: "/photo-1614149162883-504ce4d13909.jpeg" },
      { songName: "Folk Music", filePath: "/folk-music.mp3", coverPath: "/Soft.jpeg" },
      { songName: "Funk Tune", filePath: "/funk-tune.mp3", coverPath: "/Rock.jpeg" },
      { songName: "Soulful", filePath: "/soulful.mp3", coverPath: "\playlist-neon-frame-vector-music-260nw-2037588050.webp" },
      { songName: "Rock Music", filePath: "/rock-music.mp3", coverPath: "\maxresdefault.jpg" },
      { songName: "Late Night", filePath: "/late-night.mp3", coverPath: "/night.jpeg" }
  ];

    const playPauseHandler = () => {
        if (isPlaying) {
            audioElement.current.pause();
        } else {
            audioElement.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const onTimeUpdate = () => {
        const progress = (audioElement.current.currentTime / audioElement.current.duration) * 100;
        if (progressBar.current) progressBar.current.value = progress;
    };

    const onProgressChange = (e) => {
        const progress = e.target.value;
        audioElement.current.currentTime = (progress * audioElement.current.duration) / 100;
    };

    audioElement.current.onended = () => setIsPlaying(false);

    return (
        <div className="App">
            <header className="App-header">
                <h1>Your Previous Artworks</h1>
            </header>
            <div className="container">
                <div className="songList">
                    {songs.map((song, index) => (
                        <div className="songItem" key={index}>
                            <img src={song.coverPath} alt={song.songName} />
                            <span>{song.songName}</span>
                            <span className="songListPlay">
                                <span className="timestamp">02:13<i className="far fa-play-circle"></i></span>
                            </span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bottom">
                <input
                    type="range"
                    ref={progressBar}
                    onChange={onProgressChange}
                    min="0"
                    max="100"
                    value="0"
                />
                <div className="icons">
                    <i className="fas fa-step-backward"></i>
                    <i
                        className={`far ${isPlaying ? 'fa-pause-circle' : 'fa-play-circle'}`}
                        onClick={playPauseHandler}
                    ></i>
                    <i className="fas fa-step-forward"></i>
                </div>
                <div className="songInfo">{songs[songIndex].songName}</div>
            </div>
        </div>
    );
}

export default App;
