import axios from "axios";

export const instance = axios.create({
    baseURL:'https://restcountries.com/v3.1/',
    // headers: {
    //     version: "0.0"
    // }
});