import { createContext } from "react";

import type { TUser } from "types";

export const Auth = createContext<{
  login: (user: TUser) => void;
}>({
  login: () => {},
});
