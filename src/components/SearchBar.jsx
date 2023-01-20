import { IconButton, Paper } from '@mui/material'
import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import {  useNavigate } from 'react-router-dom';
function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(searchTerm){
      navigate(`/search/${searchTerm}`);
      setSearchTerm('');
    }
  }
  return (
    <Paper component="form" onSubmit={handleSubmit} sx={{borderRadius:20,pl:1,boxShadow:'none',mr:{sm:5},border:'1px solid #e3e3e3'}}>
       <input type='search' className='search-bar' value={searchTerm} placeholder='Search ...' onChange={(e)=>{setSearchTerm(e.target.value)}} />
       <IconButton type='submit' sx={{padding:"10px",color:'red'}}>
        <SearchIcon />
       </IconButton>
    </Paper>
  )
}

export default SearchBar