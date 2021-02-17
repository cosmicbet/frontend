import React from "react";
import { Link } from "gatsby";
import GlobalStyle from "./globalStyles";
import * as S from "./styled";

export default function MainLayout({ children }) {
  return (
    <S.Container>
      <GlobalStyle theme="purple" />
      {children}
      <S.Footer>
        <hr />
        Cosmic Casino | <a href="">GitHub</a> | <a href="">Telegram</a> |{" "}
        <a href="">Discord</a>
        <S.Disclaimer>
          Disclaimer. All betting in any forms involves risk. Be aware and
          accept this risk before betting. Never bet with money you cannot
          afford to lose. <Link to="/disclaimer">Read More</Link>{" "}
        </S.Disclaimer>
      </S.Footer>
    </S.Container>
  );
}
