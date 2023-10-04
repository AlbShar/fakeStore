import axios from "axios";

import { TProduct, TProductWithoutId } from "../types";

export const putProduct = async (
  id: TProduct["id"],
  updateProduct: TProductWithoutId,
): Promise<TProductWithoutId | undefined> => {
  try {
    const response = await axios.put(
      `https://fakestoreapi.com/products/${id}`,
      updateProduct,
    );

    if (response.data) {
      return updateProduct;
    }
  } catch (e) {
    console.error(e);
    return updateProduct;
  }
};
