import axios from "axios";

const api = "https://api.countrystatecity.in/v1/countries/IN";
const accesstoken = "Ymhhb29DSHJlTThSckV3RXkwcnRGVDVBMFdudXdvTjZ5QW5SeWZaMg==";
// Ymhhb29DSHJlTThSckV3RXkwcnRGVDVBMFdudXdvTjZ5QW5SeWZaMg==
const authAxios = axios.create({
  baseURL: api,
  headers: {
    //    Authorization:`Bearer ${accesstoken}`,
    "X-CSCAPI-KEY": accesstoken,
  },
});
export default authAxios;