import React, { useEffect, useState,useParams } from 'react'
import { fetchFromAPI } from './fetchFromAPI';
function ChannelDetail() {
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])
  const {id} = useParams();
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then((data)=>setChannelDetail(data?.items[0]));
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=data`)
    .then((data)=> setVideos(data?.items))
  }, [id])
  
  return (
    <div>{id}</div>
  )
}

export default ChannelDetail