import axios from "axios";

export default axios.create({
  baseURL: "https://api.pexels.com/v1/",
  headers: {
    Authorization: process.env.REACT_APP_PEXEL_API_KEY,
  },
});
