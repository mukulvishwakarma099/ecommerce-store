import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com",
  params: {},
});

class APIClient {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = async (category?: string) => {
    const url = category
      ? `${this.endpoint}/category/${category}`
      : this.endpoint;
    const res = await axiosInstance.get(url);
    return res.data;
  };
}

export default APIClient;
