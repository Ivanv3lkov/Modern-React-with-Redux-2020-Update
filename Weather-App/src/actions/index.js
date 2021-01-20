import axios from 'axios';

const API_KEY = '86cc06b33fb9a6b02ee5e4fc51cc209a';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appID=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
