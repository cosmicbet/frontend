import React from "react";
import { Link } from "gatsby";
import { Row, Col } from "react-styled-flexboxgrid";

import GameCardComponent from "./card";

import { Button } from "../../layouts/styled";
import { Container } from "./styled";

const BlockGamesComponent = ({ items }) => {
  return (
    <Container>
      <Row>
        {items.map((item, index) => {
          return (
            <Col xs={12} md={item.col || 3}>
              <GameCardComponent
                key={index}
                title={item.title}
                description={item.description}
                type={item.type}
                image={item.image}
              >
                <Button as={Link} to={item.path}>
                  {item.linkText}
                </Button>
              </GameCardComponent>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default BlockGamesComponent;
