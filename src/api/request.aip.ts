import axios from "axios";

const BASE_URL = "https://dummyjson.com/products/";

export const getProduct = axios.create({
  baseURL: BASE_URL,
});
