import axios from "axios";

const httpClient = axios.create({
  baseURL: "http://localhost:8080/api/tasks",
});

export default httpClient;
