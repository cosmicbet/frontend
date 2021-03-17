import React from "react";
import { createIntl, createIntlCache, RawIntlProvider } from "react-intl";
import locale from "../locale";

const IntlProvider = ({ children, currentLocale }) => {
  const intlError = (error) => {
    if (String(error).includes("Missing message")) {
      console.error("IntlProvider:", error);
    }
  };

  const cache = createIntlCache();

  const intl = createIntl(
    {
      onError: intlError,
      defaultLocale: "en",
      locale: currentLocale,
      messages: locale[currentLocale],
    },
    cache
  );

  return <RawIntlProvider value={intl}>{children}</RawIntlProvider>;
};

export default IntlProvider;
