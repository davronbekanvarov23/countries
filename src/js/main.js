import "../css/main.css";

import request from "./request";
import { creatCoutries } from "./updateUI";
import "./filter";
import "./mode";

const API = "https://restcountries.com/v3.1/all";

request(API)
  .then((data) => {
    creatCoutries(data);
  })
  .catch((err) => {
    alert(err.message);
  });
