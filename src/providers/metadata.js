import React from "react";
import useSourceSiteMetadata from "../hooks/useSourceSiteMetadata";
import { MetadataContext } from "../contexts";

const MetadataProvider = ({ children }) => {
  const { contacts } = useSourceSiteMetadata();
  return (
    <MetadataContext.Provider value={{ contacts }}>
      {children}
    </MetadataContext.Provider>
  );
};
export default MetadataProvider;
