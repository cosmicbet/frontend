import React from "react";
import { Link } from "gatsby";
import { FormattedMessage } from "react-intl";

import OfferCardComponent from "./card";

import Button from "../button";
import { Container } from "./styled";

const BlockOffersComponent = ({ items }) => {
  return (
    <Container>
      {items.map((item, index) => {
        return (
          <OfferCardComponent description={item.description} key={index}>
            <Button as={Link} to={item.path} color="white">
              <FormattedMessage id={item.linkText} />
            </Button>
          </OfferCardComponent>
        );
      })}
    </Container>
  );
};

export default BlockOffersComponent;
