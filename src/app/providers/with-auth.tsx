import { useRef, useEffect, useCallback } from "react";
import { loginUser } from "api/loginUser";
import { Auth } from "components/context";
import { useAppSelector } from "hooks/useAppSelector";
import { useCookie } from "hooks/useCookie";
import { useAppDispatch } from "hooks/useAppDispatch";
import { userIsAuth, userIsNotAuth } from "features/auth/authSlice";
import AuthModal from "components/authModal/authModal";

import type { TUser } from "types";

export const withAuth = (Routes: () => JSX.Element) => () => {
  const isAuth = useAppSelector((state) => state.reducer.isAuth);
  const [cookie, setCookie] = useCookie<string>("token");
  const isFirstRender = useRef(true);
  const dispatch = useAppDispatch();

  const login = useCallback(async (data: TUser) => {
    const token = await loginUser(data);

    if (token) {
      setCookie(token);
      dispatch(userIsAuth());
    } else {
      dispatch(userIsNotAuth());
    }
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;

      if (cookie) {
        dispatch(userIsAuth());
      }
    }
  }, []);

  return (
    <Auth.Provider value={{ login }}>
      {isAuth || cookie ? <Routes /> : <AuthModal />}
    </Auth.Provider>
  );
};
