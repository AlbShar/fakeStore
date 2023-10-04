import axios from "axios";

export const deleteProduct = async (
  id: number | string,
): Promise<number | string | undefined> => {
  try {
    if (typeof id === "number") {
      const res = await axios.delete(`https://fakestoreapi.com/products/${id}`);
      if (res.data && res.status === 200) {
        return id;
      } else {
        throw new Error("There is no product");
      }
    } else {
      return id;
    }
  } catch (e) {
    console.error(e);
  }
};
