import type { NextPage } from 'next'
import axios from 'axios';
import { Video } from '../types';
import VideoCard from '../components/VideoCard';
import NoResults from '../components/NoResults';
import { BASE_URL } from '../utils';

interface IProps{
  videos: Video[]
}

const Home = ({ videos } : IProps) => {
  console.log(videos);
  return (
    <div className="flex flex-col gap-10 videos h-full">
      {videos.length ? (
        videos.map((video: Video) => (
          <VideoCard post={video} key={video._id}/>
        ))
      ) : (
        <NoResults text={"No Videos Found"}/> 
      )}
    </div>
  )
}

//for fetching data in nextjs and should be used only at the time when request is there. for example login, geo-location and in our case fecthing new videos every time.
export const getServerSideProps = async ({
  query: { topic },
}: {
  query: { topic: string };
}) => {
  //file based routing.

  let response = null;
  if(topic){
    response = await axios.get(`${BASE_URL}/api/discover/${topic}`);
  }else{
    response = await axios.get(`${BASE_URL}/api/post`);
  }

  return {
    props: {
      videos: response.data
    }
  }
}

export default Home
