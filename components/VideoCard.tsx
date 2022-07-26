import React, { useState, useEffect, useRef } from "react";
import { NextPage } from "next";
import { Video } from "../types";
import Image from "next/image";
import Link from "next/link";
import { HiVolumeUp, HiVolumeOff } from "react-icons/hi";
import { BsPlay, BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";

interface IProps {
  post: Video;
}

//NextPage is a type exported by NextJS. When we write Page: NextPage we're saying that our Page component is of type NextPage.
const VideoCard: NextPage<IProps> = ({ post }) => {
  const [isHover, setIsHover] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [isVideoMuted, setIsVideoMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null); //specifying type of video element
  const onVideoPress = () => {
    if(playing){
        videoRef?.current?.pause();
        setPlaying(false);
    }else{
        videoRef?.current?.play();
        setPlaying(true);
    }
  }

  useEffect(() => {
    if(videoRef?.current){
      videoRef.current.muted = isVideoMuted;
    }
  }, [isVideoMuted])  

  return (
    <div className="flex flex-col border-b-2 border-gray-200 pb-6">
      <div>
        <div className="flex gap-3 p-2 cursor-pointer font-semibold rounded">
          <div className="md:w-16 md:h-16 w-10 h-10">
            <Link href={`/profile/${post.postedBy._id}`}>
              <>
                <Image
                  width={62}
                  height={62}
                  className="rounded-full"
                  src={post.postedBy.image}
                  alt="Profile Pic"
                  layout="responsive"
                />
              </>
            </Link>
          </div>
          <div>
            <Link href={`/profile/${post.postedBy._id}`}>
              <div className="flex items-center gap-2">
                <p className="flex gap-2 items-center md:text font-bold text-primary">
                  {post.postedBy.userName}
                  {` `}
                  <GoVerified className="text-blue-400 text-md" />
                </p>
                <p className="capitalize font-medium text-xs text-gray-500 hidden md:block">
                  {post.postedBy.userName}
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex gap-4 relative" //lg:ml-20
      >
        <div
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)} 
            className="rounded-3xl">
          <Link href={`/detail/${post._id}`}>
            <video
            //   className="lg:w-600px lg:h-300px md:h-[700px]"
              src={post.video.asset.url}
              loop
              ref={videoRef} //document.getElement.id
              // className="lg:w-[300px] h-[900px] md:h-[400px] lg:h-[530px] w-[200px] rounded-2xl cursor-pointer bg-gray-100"
              className='lg:w-[800px] h-[350px] md:h-[400px] lg:h-[600px] w-[200px] rounded-2xl cursor-pointer bg-black'
            ></video>
          </Link>

          {isHover && (
            <div className="absolute bottom-6 cursor-pointer left-8 md:left-14 lf:left-0 flex gap-10 lg:justify-between w-[100px] md:w-[50px] p-3">
              {playing ? (
                <button onClick={onVideoPress}>
                  <BsFillPauseFill className="text-white text-2xl lg:text-4xl" />
                </button>
              ) : (
                <button onClick={onVideoPress}>
                  <BsFillPlayFill className="text-white text-2xl lg:text-4xl" />
                </button>
              )}
              {isVideoMuted ? (
                <button  onClick={() => setIsVideoMuted(false)}>
                  <HiVolumeOff className="text-white text-2xl lg:text-4xl" />
                </button>
              ) : ( 
                <button onClick={() => setIsVideoMuted(true)}>
                  <HiVolumeUp className="text-white text-2xl lg:text-4xl" />
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default VideoCard;
