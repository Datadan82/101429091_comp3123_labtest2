import axios from "axios";

const API_BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

const API_KEY = "0f82bcc68bd7fdd08b12a605b1213b52";

export async function fetchWeatherByCity(city) {
  if (!city) throw new Error("City is required");

  const response = await axios.get(API_BASE_URL, {
    params: {
      q: city,
      appid: API_KEY,
      units: "metric",
    },
  });

  return response.data;
}
