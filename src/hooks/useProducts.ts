import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../api/fetchProducts";

export const useProducts = () => {
  const query = useQuery({
    queryKey: ["catalogProducts"],
    queryFn: fetchProducts,
    staleTime: 1000,
  });

  return query;
};
