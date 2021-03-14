import React, { useContext } from "react";
import { Grid, Col, Row } from "react-styled-flexboxgrid";
import { Link } from "gatsby";
import { WalletContext } from "../../contexts";

import * as S from "./styled";
import { formatCoin, shortAddress } from "../../utils/cosmic-casino";
import { setupWallet } from "../../providers/wallet";

const WalletButton = () => {
  const { wallet, setWallet } = useContext(WalletContext);

  if (!wallet) {
    return (
      <a
        href="#"
        onClick={() => {
          setupWallet(setWallet);
        }}
      >
        Connect Wallet
      </a>
    );
  }

  return (
    <a href="#">
      Connected ({shortAddress(wallet.address)}) {formatCoin(wallet.balance, 2)}
    </a>
  );
};

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
              <S.NavItem>
                <S.NavButton>
                  <WalletButton />
                </S.NavButton>
              </S.NavItem>
            </S.Nav>
          </Col>
        </Row>
      </Grid>
    </S.Header>
  );
};

export default HeaderComponent;
