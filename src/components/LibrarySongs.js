import React from 'react';
import { playAudio } from "../util";
const LibrarySongs = ({song,songs,setCurrentSong,id,audioRef,isPlaying,setSongs})=> {
    const songSelectHandler = async() =>{
        // const selectedSong = songs.filter((state) => state.id ===id);
        // setCurrentSong(selectedSong[0]);
        const selectedSong = song;
        await setCurrentSong(selectedSong);
        //Add Active State
        const newSongs = songs.map((song) =>{
            if(song.id===id)
            {
                return{
                ...song,
                active:true,
                }
            }else{
                return{
                    ...song,
                    active: false,
                }
            }
        });
        setSongs(newSongs);
        //check if audio active 
        playAudio(isPlaying,audioRef);
    };
    return (
        <div onClick = {songSelectHandler}className={`library-song ${song.active ? 'selected': ""}`}>
            <img src={song.cover} alt={song.name} />
            <div className="song-description">
            <h3>{song.name}</h3>
            <h4>{song.artist}</h4>
            </div>
        </div> 
    )
};

export default LibrarySongs;

