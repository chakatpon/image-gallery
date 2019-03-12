import axios from 'axios';


const KEY = 'AIzaSyAtaRPdS0m0mVkN-npt661GNSUV34NEWBA';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})