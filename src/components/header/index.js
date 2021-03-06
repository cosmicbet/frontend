import React, { useContext } from "react";
import { Link } from "gatsby";
import { FormattedMessage } from "react-intl";

import { WalletContext } from "../../contexts";
import { setupWallet } from "../../providers/wallet";
import { formatCoin, shortAddress } from "../../utils/cosmic-casino";

import DropdownComponent from "../dropdown";
import * as S from "./styled";
import { Grid, Row, Col } from "../../layouts/grid";
import logo from "../../images/text-logo.svg";

const WalletButton = () => {
  const { wallet, setWallet } = useContext(WalletContext);

  if (!wallet) {
    return (
      <a
        onClick={() => {
          setupWallet(setWallet);
        }}
      >
        <FormattedMessage id="CONNECT_WALLET" />
      </a>
    );
  }

  return (
    <a>
      <FormattedMessage id="WALLET_CONNECTED" /> ({shortAddress(wallet.address)}
      ) {formatCoin(wallet.balance, 2)}
    </a>
  );
};

const HeaderComponent = ({
  transform,
  localeOptions,
  selectedLanguage,
  languageChangeHandler,
}) => {
  return (
    <S.Header $transform={transform}>
      <Grid fluid>
        <Row center="xs">
          <Col xs={12} md={10}>
            <Row middle="xs">
              <Col sm={6}>
                <S.Nav>
                  <S.NavItem>
                    <S.Logo>
                      <Link to="/">
                        <img src={logo} alt="logo" width="60px" />
                      </Link>
                    </S.Logo>
                  </S.NavItem>
                  <S.NavItem>
                    <S.NavLink as={Link} to="/#games">
                      <FormattedMessage id="GAMES" />
                    </S.NavLink>
                  </S.NavItem>
                  <S.NavItem>
                    <S.NavLink as={Link} to="/disclaimer">
                      FAQ
                    </S.NavLink>
                  </S.NavItem>
                  <S.NavItem>
                    <S.NavLink as={Link} to="/">
                      <FormattedMessage id="CONTACTS" />
                    </S.NavLink>
                  </S.NavItem>
                  <S.NavItem>
                    <DropdownComponent
                      options={localeOptions}
                      isOpen={true}
                      component={S.NavLink}
                      selectedOption={selectedLanguage}
                      optionChangeHandler={languageChangeHandler}
                    />
                  </S.NavItem>
                </S.Nav>
              </Col>
              <Col xs="auto" style={{ textAlign: "right" }}>
                <S.NavButton>
                  <WalletButton />
                </S.NavButton>
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    </S.Header>
  );
};

export default HeaderComponent;
