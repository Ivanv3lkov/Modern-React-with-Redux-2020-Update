import axios from 'axios';

const KEY = 'AIzaSyDBRC4hhPFt2v8f5Oi1ZE5088KEL8aXGQY';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});
