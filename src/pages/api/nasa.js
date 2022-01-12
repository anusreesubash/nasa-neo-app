import axios from "axios";

const NasaApi = {
  browse: () => axios.get(`https://api.nasa.gov/neo/rest/v1/neo/browse?page=0&size=10&api_key=${process.env.NEXT_PUBLIC_NASA_API_KEY}`),
  getByDateRange: (fromDate, toDate) => axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${fromDate}&end_date=${toDate}&api_key=${process.env.NEXT_PUBLIC_NASA_API_KEY}`),
  getById: (id) => axios.get(`https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=${process.env.NEXT_PUBLIC_NASA_API_KEY}`)
};

export default NasaApi;