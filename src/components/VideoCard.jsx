import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { demoChannelUrl, demoVideoUrl,demoChannelTitle } from '../utils/constants'
import CheckCircle from '@mui/icons-material/CheckCircle';
function VideoCard({video:{id:{videoId},snippet}}) {
  return (
    <Card sx={{width:{xs:'100%',sm:'358px', md:'320px'}}}>
        <Link to={videoId?`/video/${videoId}`:demoVideoUrl}>
            <CardMedia  image={snippet?.thumbnails?.high?.url}
                alt={snippet?.title}
                sx={{width:{xs:'100%',sm:'358px',md:'320px'},height:180}}
            /> 
        </Link>
        <CardContent sx={{backgroundColor:"#1e1e1e",height:'106px',boxShadow:'none',borderRadius:0}}>
        <Link to={snippet?.channelId?`/channel/${snippet?.channelId}`:demoChannelUrl}><Typography variant="subtitle2" fontWeight="bold" color="gray">
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{fontSize:12,color:'gray',ml:'5px'}}  />
        </Typography></Link>
        </CardContent>
    </Card>
  )
}

export default VideoCard