import axios from "axios";

const httpClient = axios.create({
  baseURL: "http://localhost:8080/api/tasks",
});
/* httpClient.interceptors.request.use(
  (request) => {
    return request;
  },
  (error) => {
    console.log("Something went wrong");
    Promise.reject(error);
  }
);

httpClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log("Something went wrong");
    Promise.reject(error);
  }
); */
export default httpClient;
