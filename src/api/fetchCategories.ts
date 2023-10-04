import axios from "axios";

export const fetchCategories = async () => {
  try {
    const categories = await axios.get(
      "https://fakestoreapi.com/products/categories",
    );
    if (categories.data) {
      return categories.data;
    } else {
      throw new Error("No categories data");
    }
  } catch (e) {
    console.error(e);
    return [];
  }
};
