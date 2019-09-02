import { CITY_SET } from "../actionTypes";

export const citySet = (cityName) => {
  return {
    type: CITY_SET,
    value: cityName
  }
}