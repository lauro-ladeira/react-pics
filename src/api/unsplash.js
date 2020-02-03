import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization:
      "Client-ID 1a63a80e7aa16aa0f99ffc13db8e743edb1f8f15be36f2ae9d2cea9687fee099"
  }
});
