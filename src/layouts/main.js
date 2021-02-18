import React from "react";
import MetadataProvider from "../providers/metadata";
import GlobalStyle from "./globalStyles";
import * as S from "./styled";

export default function MainLayout({ children }) {
  return (
    <>
      <GlobalStyle theme="purple" />
      <MetadataProvider>
        <S.App>{children}</S.App>
      </MetadataProvider>
    </>
  );
}
