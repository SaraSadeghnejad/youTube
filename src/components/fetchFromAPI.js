import axios from 'axios';
const BASE_URL = 'https://youtube-search-results.p.rapidapi.com'
const options = {
    url: BASE_URL,
    params: {maxResults:50},
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-search-results.p.rapidapi.com'
    }
  };
  
export const FetchFromAPI = async(url) =>{
   const {data}= axios.get(`${BASE_URL}/${url}`,options);
   return data
}