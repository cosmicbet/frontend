import React from "react";
import { Link } from "gatsby";
import { FormattedMessage } from "react-intl";

import GameCardComponent from "./card";

import Button from "../button";
import { Container } from "./styled";

const BlockGamesComponent = ({ items }) => {
  return (
    <Container>
      {items.map((item, index) => {
        return (
          <GameCardComponent description={item.description} key={index}>
            <Button as={Link} to={item.path} color="white">
              <FormattedMessage id={item.linkText} />
            </Button>
          </GameCardComponent>
        );
      })}
    </Container>
  );
};

export default BlockGamesComponent;