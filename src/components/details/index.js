import React from "react";
import { rem } from "polished";

import planets from "../../images/planets.png";

import * as S from "./styled";

const pluses = [
  { left: rem(24), top: rem(24) },
  { left: rem(24), top: "50%" },
  { left: rem(24), bottom: rem(24) },
  { left: "50%", top: rem(24) },
  { left: "50%", top: "50%" },
  { left: "50%", bottom: rem(24) },
  { right: rem(24), top: rem(24), opacity: 0 },
  { right: rem(24), top: "50%" },
  { right: rem(24), bottom: rem(24) },
];

const Details = ({ variant }) => {
  return (
    <S.Wrapper $variant={variant}>
      {pluses.map((item, i) => (
        <S.Plus
          key={i}
          $top={item.top}
          $right={item.right}
          $bottom={item.bottom}
          $left={item.left}
          $opacity={item.opacity}
        />
      ))}

      <S.System>
        <img src={planets} alt="???" width="1000px" height="1000px" />
        {/* <S.SystemCenter /> */}
      </S.System>
    </S.Wrapper>
  );
};

export default Details;
