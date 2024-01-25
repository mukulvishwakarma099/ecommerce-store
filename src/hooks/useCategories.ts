import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import ms from "ms";
const apiClient = new APIClient("/products/categories");

const useCategories = () => {
  return useQuery<string[]>({
    queryKey: ["categories"],
    queryFn: () => apiClient.getAll(),
    staleTime: ms("1d"),
  });
};

export default useCategories;
