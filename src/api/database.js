import axios from "axios";
/* Axios is a promised based HTTP client
    we can use this, or some other way
    for connecting this front end to 
    the middleware/REST api
    
    Or not, that's totally fine too
    - Caleb*/

export default axios.create({
  baseURL: "https://some-domain.com/api/",
  timeout: 2000,
  headers: {
    Authorization: "for example"
  }
});
