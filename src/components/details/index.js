import React from "react";
import { rem } from "polished";

import center from "../../images/planets-part-1.png";
import orbit from "../../images/planets-part-2.png";
import planets from "../../images/planets-part-3.png";
import planets1 from "../../images/planets-part-4.png";
import planets2 from "../../images/planets-part-5.png";

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
          $delay={i * 10}
          $top={item.top}
          $right={item.right}
          $bottom={item.bottom}
          $left={item.left}
          $opacity={item.opacity}
        />
      ))}

      <S.System>
        <S.SystemOrbit $image={orbit} />
        <S.SystemPlanets $image={planets} />
        <S.SystemPlanetsTwo $image={planets1} />
        <S.SystemPlanetsThree $image={planets2} />
        <S.SystemCenter $image={center} />
      </S.System>
    </S.Wrapper>
  );
};

export default Details;
