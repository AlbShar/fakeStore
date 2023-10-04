import axios from "axios";

export const fetchProducts = async () => {
  try {
    const products = await axios.get("https://fakestoreapi.com/products");

    if (products) {
      return products.data;
    } else {
      throw new Error("No data");
    }
  } catch (e) {
    console.error(e);
  }
};
