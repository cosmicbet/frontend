import React from "react";
import { Link } from "gatsby";
import { Row, Col } from "react-styled-flexboxgrid";
import gradient from "random-gradient";
import GameCardComponent from "./card";

import { Container, StyledCol, StyledRow } from "./styled";
import { StyledLink } from "../../layouts/styled";

const BlockGamesComponent = ({ items }) => {
  return (
    <Container>
      <StyledRow as={Row}>
        {items.map((item, index) => {
          return (
            <StyledCol as={Col} xs={12} md={item.col || 6} key={index}>
              <GameCardComponent
                key={index}
                title={item.title}
                description={item.description}
                type={item.type}
                image={item.image}
                bgGradient={{ background: gradient(`grad-${index}`) }}
              >
                <StyledLink as={Link} to={item.path}>
                  <span>{item.linkText}</span>
                </StyledLink>
              </GameCardComponent>
            </StyledCol>
          );
        })}
      </StyledRow>
    </Container>
  );
};

export default BlockGamesComponent;
