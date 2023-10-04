import axios from "axios";
import type { TUser } from "../types";

export const loginUser = async (data: TUser): Promise<string | false> => {
  try {
    const response = await axios.post(
      "https://fakestoreapi.com/auth/login",
      data,
    );
    const { token } = await response.data;

    return token;
  } catch (e) {
    console.error(e);
    return false;
  }
};
