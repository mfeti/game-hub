import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "1dadda8cc9024e84aa11da73ba672037",
  },
});
