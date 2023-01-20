import { IconButton, Paper } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
function SearchBar() {
  return (
    <Paper component="form" onSubmit={()=>{}} sx={{borderRadius:20,pl:1,boxShadow:'none',mr:{sm:5},border:'1px solid #e3e3e3'}}>
       <input type='search' className='search-bar' value='' placeholder='Search ...' onChange={()=>{}} />
       <IconButton type='submit' sx={{padding:"10px",color:'red'}}>
        <SearchIcon />
       </IconButton>
    </Paper>
  )
}

export default SearchBar