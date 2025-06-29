import { API_KEY } from "../App";

const BASE_URL = "https://api.weatherapi.com/v1/";

const API_OPTIONS = {
  method: "GET",
};

export const fetchWeather = async ({ days, searchValue }) => {
  try {
    const res = await fetch(
      `${BASE_URL}/forecast.json?key=${API_KEY}&q=${searchValue}&days=${days}&aqi=no&alerts=no`,
      API_OPTIONS
    );
    const data = await res.json();

    if (data.error) {
      throw new Error(data.error.message);
    }

    return data;
  } catch (e) {
    console.error("fetchWeather error:", e.message);
    throw e;
  }
};

export const fetchForecast = async ({ days, searchValue }) => {
  console.log("fetchingForecast", days);
  try {
    const res = await fetch(
      `${BASE_URL}/forecast.json?key=${API_KEY}&q=${searchValue}&days=${days}`,
      API_OPTIONS
    );

    const data = await res.json();

    if (data.error) {
      throw new Error(data.error.message);
    }

    return data;
  } catch (e) {
    console.error("fetchWeather error:", e.message);
    throw e;
  }
};
