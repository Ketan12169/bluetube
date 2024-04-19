import axios from "axios";

export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

function getRandomInt(a, b) {
  a = Math.ceil(a);
  b = Math.floor(b);
  return Math.floor(Math.random() * (b - a) + a); // The maximum is exclusive and the minimum is inclusive
}

const options = {
  params: {
    maxResults: getRandomInt(51, 99),
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

console.log(process.env.REACT_APP_RAPID_API_KEY); // This one is showing my rapid api key in .env file

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
