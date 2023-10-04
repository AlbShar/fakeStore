import axios from "axios";

import { TProduct } from "../types";

export const postProduct = async (
  product: TProduct,
): Promise<TProduct | undefined> => {
  try {
    const response = await axios.post(`https://fakestoreapi.com/products`, {
      method: "POST",
      body: JSON.stringify(product),
    });

    if (response.data && response.status === 200) {
      return product;
    } else {
      throw new Error("There is no product");
    }
  } catch (e) {
    console.error(e);
  }
};
