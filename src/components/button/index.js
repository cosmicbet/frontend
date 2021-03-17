import React from "react";

import * as S from "./styled";

const Button = ({ size, color, children, icon, ...props }) => {
  return (
    <S.Button $color={color} $size={size} $icon={icon} {...props}>
      {children}
    </S.Button>
  );
};

export default Button;
