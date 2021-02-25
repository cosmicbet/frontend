import React from "react";
import { Grid, Col, Row } from "react-styled-flexboxgrid";
import { Link } from "gatsby";

import * as S from "./styled";

const HeaderComponent = () => {
  return (
    <S.Header>
      <Grid>
        <Row between="xs" middle="xs">
          <Col>
            {/* TODO: need a real logo */}
            <S.Logo>CASINØ</S.Logo>
          </Col>
          <Col>
            <S.Nav>
              <S.NavItem>
                <Link to="/">Games</Link>
              </S.NavItem>
              <S.NavItem>
                <Link to="/">FAQ</Link>
              </S.NavItem>
              <S.NavItem>
                <Link to="/">Contacts</Link>
              </S.NavItem>
            </S.Nav>
          </Col>
        </Row>
      </Grid>
    </S.Header>
  );
};

export default HeaderComponent;
