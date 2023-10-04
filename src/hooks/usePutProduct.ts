import { useQueryClient, useMutation } from "@tanstack/react-query";
import { putProduct } from "../api/putProduct";
import { TProductWithoutId, TProduct } from "../types";

type TMutation = {
  id: TProduct["id"];
  updateProduct: TProductWithoutId;
};

export const usePutProduct = () => {
  const queryClient = useQueryClient();

  const updateProductDetail = useMutation({
    mutationFn: ({ id, updateProduct }: TMutation) =>
      putProduct(id, updateProduct),
    onSuccess: (updateProduct: TProductWithoutId | undefined) => {
      if (updateProduct) {
        queryClient.setQueryData(["productDetail"], () => updateProduct);
      }
    },
  });

  return updateProductDetail;
};
