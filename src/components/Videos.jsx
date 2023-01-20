import { Box, Stack } from '@mui/system'
import React from 'react'
import {ChannelCard,VideoCard} from '.'


function Videos({videos}) {
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
       
{videos?.map((item,idx)=>{
    return(
      <Box key={idx}>
        {item.id.videoId&&<VideoCard video={item}/>}
        {item.id.channelId&&<ChannelCard ChannelDetail={item}/>}
      </Box>
    )
})}
        
    </Stack>
  )
}

export default Videos