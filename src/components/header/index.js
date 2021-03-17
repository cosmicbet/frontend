import React, { useContext } from "react";
import { Grid, Col, Row } from "react-styled-flexboxgrid";
import { Link } from "gatsby";
import { FormattedMessage } from "react-intl";

import { WalletContext } from "../../contexts";
import { setupWallet } from "../../providers/wallet";
import { formatCoin, shortAddress } from "../../utils/cosmic-casino";

import DropdownComponent from "../dropdown";
import * as S from "./styled";

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

const HeaderComponent = ({
  black,
  localeOptions,
  selectedLanguage,
  languageChangeHandler,
}) => {
  return (
    <S.Header $black={black}>
      <Grid>
        <Row between="xs" middle="xs">
          <Col>
            {/* TODO: need a real logo */}
            <S.Logo>CASINØ</S.Logo>
          </Col>
          <Col>
            <S.Nav>
              <S.NavItem>
                <Link to="/">
                  <FormattedMessage id="GAMES" />
                </Link>
              </S.NavItem>
              <S.NavItem>
                <Link to="/">FAQ</Link>
              </S.NavItem>
              <S.NavItem>
                <Link to="/">
                  <FormattedMessage id="CONTACTS" />
                </Link>
              </S.NavItem>
              <S.NavItem>
                <DropdownComponent
                  options={localeOptions}
                  isOpen={true}
                  selectedOption={selectedLanguage}
                  optionChangeHandler={languageChangeHandler}
                />
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
