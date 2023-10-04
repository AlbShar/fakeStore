import axios from "axios";

import { TProduct } from "../types";

export const fetchProduct = async (
  id: TProduct["id"],
): Promise<TProduct | undefined> => {
  try {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);

    if (response.data) return response.data;
  } catch (e) {
    console.error(e);
  }
};
