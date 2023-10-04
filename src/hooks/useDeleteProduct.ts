import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProduct } from "../api/deleteProduct";
import type { TProduct } from "../types";

export const useDeleteProduct = (key: "catalogProducts" | "productDetail") => {
  const queryClient = useQueryClient();
  const nameMutation: string =
    key === "catalogProducts"
      ? "deleteProductBriefFromCatalog"
      : "clearCacheProductDetail";

  const mutation = useMutation({
    mutationFn: (id: TProduct["id"]) => deleteProduct(id),
    onSuccess: (id: TProduct["id"] | undefined) => {
      if (key === "catalogProducts") {
        queryClient.setQueryData([key], (products: TProduct[] | undefined) =>
          products && id
            ? products.filter((product: TProduct) => product.id !== id)
            : products,
        );
      } else {
        queryClient.setQueryData([key], () => "");
      }
    },
  });

  const dynamicNameMutation = {
    [nameMutation]: mutation,
  };

  return dynamicNameMutation[nameMutation];
};
