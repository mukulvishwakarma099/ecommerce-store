import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import ms from "ms";

export interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  price: number;
  qty: number;
}

const apiClient = new APIClient("/products");

const useProducts = (selectedCategory?: string) => {
  return useQuery<Product[]>({
    queryKey: ["product", selectedCategory],
    queryFn: () => apiClient.getAll(selectedCategory),
    staleTime: ms("1d"),
  });
};

export default useProducts;
