import React, { useContext } from "react";
import { Link } from "gatsby";
import * as S from "./styled";
import { MetadataContext } from "../../contexts";

const FooterComponent = () => {
  const {
    contacts: { github, telegram, discord },
  } = useContext(MetadataContext);
  return (
    <S.Footer>
      <hr />
      Cosmic Casino | <a href={github}>GitHub</a> |{" "}
      <a href={telegram}>Telegram</a> | <a href={discord}>Discord</a>
      <S.Disclaimer>
        Disclaimer. All betting in any forms involves risk. Be aware and accept
        this risk before betting. Never bet with money you cannot afford to
        lose. <Link to="/disclaimer">Read More</Link>{" "}
      </S.Disclaimer>
    </S.Footer>
  );
};
export default FooterComponent;