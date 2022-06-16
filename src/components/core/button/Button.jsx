import React, { useContext } from "react";
import { ThemeContext } from "../../../providers/Theme-provider";
import { Text } from "..";
import { Arrow } from "../../../assets/icons";
import { ButtonStyle } from "./ButtonStyle";

export const Button = ({
  type,
  bgColor="primary",
  borderColor,
  bRadius,
  color,
  title,
  f_size,
  f_weight,
  width,
  onClick,
}) => {
  const { Theme } = useContext(ThemeContext);
  let textColor = color.includes("primary")
    ? Theme.primary[color]
    : Theme.secondary[color];
  let backgroundColor = bgColor.includes("primary")
    ? Theme.primary[bgColor]
    : Theme.secondary[bgColor];
  return (
    <ButtonStyle
      onClick={onClick}
      borderColor={borderColor}
      b_radius={bRadius}
      f_weight={f_weight}
      bgColor={backgroundColor}
      width={width}
    >
      <Text type={f_size} color={textColor}>
        {title}
      </Text>
      {type === "arrow" && (
        <div style={{ display: "flex", paddingLeft: "10px" }}>
          <Arrow color={textColor} />
        </div>
      )}
    </ButtonStyle>
  );
};

export default Button;