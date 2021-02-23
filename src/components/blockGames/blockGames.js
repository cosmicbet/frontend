import React from "react";
import { Link } from "gatsby";
import { Container } from "./styled";
import GameCardComponent from "./card";

const BlockGamesComponent = ({ items }) => {
  return (
    <Container>
      {items.map((item, index) => {
        return (
          <GameCardComponent
            key={index}
            title={item.title}
            description={item.description}
            type={item.type}
            image={item.image}
          >
            <Link to={item.path}>{item.linkText}</Link>
          </GameCardComponent>
        );
      })}
    </Container>
  );
};

export default BlockGamesComponent;
