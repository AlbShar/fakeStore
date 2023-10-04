import { useQuery } from "@tanstack/react-query";
import { fetchProduct } from "../api/fetchProduct";
import { TProduct } from "../types";

export const useProduct = (id: TProduct["id"]) => {
  const query = useQuery({
    queryKey: ["productDetail"],
    queryFn: () => fetchProduct(id),
    enabled: typeof id === "number" ? true : false,
  });

  return query;
};
