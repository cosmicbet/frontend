import { LANGUAGE } from "../constants/localStorage";

export const isBrowser = typeof window !== "undefined";
export const defaultLanguage = "en";
export const getLanguage = () => {
  let language;
  if (isBrowser) {
    localStorage.getItem(LANGUAGE)
      ? (language = localStorage.getItem(LANGUAGE))
      : (language = defaultLanguage);
  }
  return language || defaultLanguage;
};
