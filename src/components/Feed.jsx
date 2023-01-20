import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Videos, Sidebar } from '.'
import { FetchFromAPI } from './fetchFromAPI'

function Feed() {
    const [selectedCategory, setSelectedCategory] = useState('New')
    const [videos, setVideos] = useState([]);
    useEffect(() => {
      const data=FetchFromAPI(`search?part=snippet&query=${selectedCategory}`).then(()=>{
        setVideos(data.items)
      })
    }, [selectedCategory])
    
  return (
    <Stack sx={{flexDirection:{sx:'column',md:'row'}}}>
      <Box sx={{height:{sx:'auto',md:'92vh',borderRight:'1px solid #3d3d3d',px:{sx:0,md:2}}}}>
      <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <Typography className="copyright"  variant="body2" sx={{mt:1.5,color:'#FFF'}}>Copyright 2022 sara collection media</Typography>
      </Box>
      <Box p={2} sx={{overflowY:'auto', height:"90vh" ,flex:2}}>
        <Typography variant="h4" mb={2} fontWeight="bold" sx={{color:'#FFF'}}>
           {selectedCategory} <span style={{color:'#F31501'}}>videos</span>
        </Typography>
        <Videos video={videos} />
      </Box>
    </Stack>
  )
}

export default Feed