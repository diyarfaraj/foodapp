import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer 1C4MWVrc4lT9o-QUbOrbKJ5GqJL9ofwX_7cIu5GxlizD_Y4uaxFOlcjoxC8k_rAM_e8tCpyV-CqIT8ZUGcnJN9pGfmZ5V6Odd2gu93eFtBV2RguRAa4Vtcn9AJJ6Y3Yx",
  },
});
