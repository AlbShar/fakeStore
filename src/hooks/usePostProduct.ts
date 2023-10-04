import { useQueryClient, useMutation } from "@tanstack/react-query";
import { postProduct } from "../api/postProduct";
import type { TProduct } from "../types";

export const usePostProduct = (key: "catalogProducts" | "productDetail") => {
  const queryClient = useQueryClient();
  const nameMutation: string =
    key === "catalogProducts"
      ? "addProductBriefToCatalog"
      : "addProductDetailInCache";

  const mutation = useMutation({
    mutationFn: (newProduct: TProduct) => postProduct(newProduct),
    onSuccess: (newProduct: TProduct | undefined) => {
      if (key === "catalogProducts") {
        if (newProduct) {
          queryClient.setQueryData(
            [key],
            (previousProducts: TProduct[] | undefined) =>
              previousProducts
                ? [...previousProducts, newProduct]
                : previousProducts,
          );
        }
      } else {
        queryClient.setQueryData([key], () => newProduct);
      }
    },
  });

  const dynamicNameMutation = {
    [nameMutation]: mutation,
  };

  return dynamicNameMutation[nameMutation];
};
