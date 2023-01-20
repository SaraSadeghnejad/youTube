import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Videos } from '.'
import { fetchFromAPI } from './fetchFromAPI'

const Feed=()=>{
    const {searchTerm} = useParams();
    const [videos, setVideos] = useState([]);
    useEffect(() => {
      fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data)=>{setVideos(data.items)})}
      , [searchTerm])

  return (
    <Box p={2} sx={{overflowY:'auto', height:"90vh" ,flex:2}}>
    <Typography variant="h4" mb={2} fontWeight="bold" sx={{color:'#FFF'}}>
      Search Result for:  <span style={{color:'#F31501'}}>{searchTerm}</span>videos
    </Typography>

    <Videos videos={videos} />
  </Box>
  )
}

export default Feed