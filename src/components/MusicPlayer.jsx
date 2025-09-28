"use client"

import { useEffect, useRef, useState } from 'react'
import { FaBackward, FaChevronRight, FaForward, FaPause, FaPlay } from 'react-icons/fa';
import { GoMute, GoUnmute } from 'react-icons/go';

const MusicPlayer = ({ songList }) => {
  const [index, setIndex] = useState(0);
  const [playing, setplaying] = useState(false);
  const [progress, setprogress] = useState(0);
  const [time, settime] = useState("0:00 - 0:00");
  const [muted, setMuted] = useState(false);
  const [mobileExpanded, setmobileExpanded] = useState(false);

  const audioRef = useRef(null);
  const current = songList[index];

  useEffect(() => {
    console.log(current.url);
    
    const song = audioRef.current;
    console.log("src", song.src);
    
    if ((!song || !current.url)) {
      return;
    }

    // set the new source
    song.src = current.url;
    song.load();

    // song.play().then(() => { google changed policy
    //   setplaying(true);
    // }).catch(err => {
    //   console.log("Autoplay blocked:", err);
    // });

    const update = () => {
      if (!song.duration) return;
      setprogress((song.currentTime / song.duration) * 100);

      const format = (s) => {
        return `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`
      }

      settime(`${format(song.currentTime)} - ${format(song.duration)}`);


    }

    song.addEventListener("timeupdate", update);
    song.addEventListener("ended", next);

    return () => {
      song.removeEventListener("timeupdate", update);
      song.removeEventListener("ended", next);
    }
  }, [index]);


  const playSong = () => {
    audioRef.current?.play();
    setplaying(true);
  }

  const togglePlayButton = () => {
    if (!audioRef.current) return;
    setplaying((prev) => !prev);
    playing ? audioRef.current.pause() : audioRef.current.play();
  }

  const toggleMuteButton = () => {
    if (audioRef.current) {
      audioRef.current.muted = !muted;
      setMuted(!muted);
    }
  }

  const prev = () => {
    setIndex((i) => (i - 1 + songList.length) % songList.length);
    setTimeout(() => {
      playSong();
    }, 50);
  }

  const next = () => {
    setIndex((i) => (i + 1) % songList.length);
    setTimeout(() => {
      playSong();
    }, 50);
  }


  return (
    <div className=' fixed bottom-0 left-1 m-4 z-50 group flex flex-col text-white justify-center rounded-2xl shadow-xl xl:p-2 bg-gray-900 transition-all duration-300'>
      <div className='flex group-hover:gap-4 items-center h-40'>
        <div className='flex flex-col xl:w-30 w-20 space-y-2 items-center justify-center relative'>
          <div className="relative group/cover xl:h-22 h-14  xl:w-22 w-14 rounded-full border-4 border-white overflow-hidden">
            {/*cover*/}
            <img
              // src={coverUrl}
              alt="cover"
              className="w-full h-full rounded-full object-cover"
            />

            {/* overlay (only visible on hover) */}
            <div
              onClick={toggleMuteButton}
              className="absolute inset-0 flex items-center justify-center 
                   bg-gray-800/50 opacity-0 group-hover/cover:opacity-100 
                   transition duration-300 cursor-pointer rounded-full"
            >
              {muted ? (
                <GoMute className="text-white text-2xl" />
              ) : (
                <GoUnmute className="text-white text-2xl" />
              )}
            </div>
          </div>
          <button className='absolute lg:hidden -right-1 top-2 bg-blue-500 text-sm p-1 rounded-full'
            style={{ transform: mobileExpanded ? 'translateY(-50%) rotate(90deg)' : 'translateY(-50%)' }}
            onClick={() => setmobileExpanded(prev => !prev)}
          >
            <FaChevronRight />
          </button>
          <p className='xl:text-[12px] text-[8px] text-center text-gray-500' title='coming soon...'>
            {/* <a href=''> */}
            View more on my Music Website

            {/* </a> */}
          </p>
        </div>

        <div className='hidden lg:flex flex-col flex-1 justify-center space-y-2  mr-3 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100  translate-x-[-20px] group-hover:translate-x-0
          pointer-events-none group-hover:pointer-events-auto
          max-w-0 group-hover:max-w-lg
          overflow-hidden'>
          <div className='py-1 min-w-max'>
            <h2 className='xl:text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-300 bg-clip-text text-transparent'>{current.artist}</h2>
            <p className='text-gray-500 xl:text-xl text-sm'>{current.title}</p>
          </div>

          <div>
            <div className='xl:w-auto w-auto h-1 bg-gray-600 rounded-xl cursor-pointer'>
              <div className='h-1 bg-blue-500 rounded-xl' style={{ width: `${progress}` }}></div>
            </div>
            <div className='xl:text-sm text-[10px] text-gray-500'>{time}</div>
          </div>


          <div className='flex justify-center items-center gap-3'>
            <FaBackward className='text-2xl text-white hover:text-blue-500 duration-500 cursor-pointer disabled:text-gray-500' onClick={prev} />
            <div className='bg-blue-400 w-full xl:py-2 py-1 rounded-full flex items-center justify-center cursor-pointer' onClick={togglePlayButton}>
              {playing ? (<FaPause className='xl:text-2xl text-sm' />) : (<FaPlay className='xl:text-2xl text-sm' />)}
            </div>
            <FaForward className='text-2xl text-white hover:text-blue-500 duration-500 cursor-pointer disabled:text-gray-500' onClick={next} />
          </div>
        </div>
      </div>
      <audio ref={audioRef}/>
    </div>
  )
}

export default MusicPlayer;
