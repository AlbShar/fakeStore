import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "../api/fetchCategories";

export const useCategories = () => {
  const query = useQuery({
    queryKey: ["categoriesProducts"],
    queryFn: fetchCategories,
  });

  return query;
};
