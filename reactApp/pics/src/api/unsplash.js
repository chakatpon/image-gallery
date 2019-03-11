import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID 02f26a47c46601e7abdab865c80dbd2191fd577abb1a746fef359d286cd5f8a5'
    }
});