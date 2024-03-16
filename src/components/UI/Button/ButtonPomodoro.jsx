import React from "react";
import { StyledButton } from "./ButtonPomodoroStyled";

const ButtonPomodoro = ({
  children,
  radius = "6",
  secondary,
  disabled = false,
  onClick = (e) => e.preventDefault(),
}) => {
  return (
    <StyledButton
      disabled={disabled}
      onClick={onClick}
      secondary={secondary}
      radius={radius}
      whileTap={{ scale: 0.8 }}
    >
      {children}
    </StyledButton>
  );
};

export default ButtonPomodoro;
