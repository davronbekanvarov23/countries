import "../css/main.css";
import "./mode";

import request from "./request";

import { createCountryInfo } from "./updateUI";

const quaryString = window.location.search;
const urlParams = new URLSearchParams(quaryString);
const country = urlParams.get("country");

const countryAPI = `https://restcountries.com/v3.1${country}`;
console.log(countryAPI);

request(countryAPI)
  .then((data) => {
    createCountryInfo(data[0]);
  })
  .catch((err) => {
    alert(err.message);
  });
