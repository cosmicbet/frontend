import React, { useContext } from "react";
import { Link } from "gatsby";

import { MetadataContext } from "../../contexts";

import * as S from "./styled";
import { Grid, Row, Col } from "../../layouts/grid";

const FooterComponent = () => {
  const {
    contacts: { github, telegram, discord },
  } = useContext(MetadataContext);
  return (
    <S.Footer>
      <Grid fluid>
        <Row>
          <Col xs={12} md={6}>
            <S.Links>
              <a href={github}>GitHub</a>
              <span>&middot;</span>
              <a href={telegram}>Telegram</a>
              <span> &middot;</span>
              <a href={discord}>Discord</a>
            </S.Links>
            <S.Disclaimer>
              Disclaimer. All betting in any forms involves risk. Be aware and
              accept this risk before betting. Never bet with money you cannot
              afford to lose. <Link to="/disclaimer">Read More</Link>.
            </S.Disclaimer>
            <S.Disclaimer>© 2021</S.Disclaimer>
          </Col>
        </Row>
      </Grid>
    </S.Footer>
  );
};
export default FooterComponent;
