import { useState } from "react";

export const useCookie = <T extends string>(
  key: T,
): [T, (value: T, cookieOptions?: object) => void] => {
  const [cookie, setStoredCookie] = useState<T>(() => {
    try {
      const cookies = document.cookie.split(";");

      for (let i = 0; i < cookies.length; i++) {
        const keyValueCookie = cookies[i].trim();
        if (keyValueCookie.startsWith(key + "=")) {
          return keyValueCookie.substring(key.length + 1) as T;
        }
      }
    } catch (error) {
      console.error(error);
    }
    return "" as T;
  });

  const setCookie = (value: T, cookieOptions = {}) => {
    type TOptions = {
      path?: string;
      expires?: string | Date;
      "max-age"?: number;
      domain?: string;
      secure?: boolean;
      sameSite?: "none" | "strict" | "lax";
      httpOnly?: boolean;
    };
    let optionKey: keyof TOptions;

    const options: TOptions = {
      ...cookieOptions,
    };
    if (options.expires instanceof Date) {
      options.expires = options.expires.toUTCString();
    }
    let updatedCookie =
      encodeURIComponent(key) + "=" + encodeURIComponent(value);

    for (optionKey in options) {
      updatedCookie += "; " + optionKey;
      let optionValue = options[optionKey];
      if (optionValue !== true) {
        updatedCookie += "=" + optionValue;
      }
    }

    try {
      document.cookie = updatedCookie;
      setStoredCookie(value);
    } catch (error) {
      console.error(error);
    }
  };

  return [cookie, setCookie];
};
