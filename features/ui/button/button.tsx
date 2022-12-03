import React from "react";
import styled from "styled-components";

export type ButtonSize = "small" | "medium" | "large" | "xlarge";
export type ButtonColor =
  | "primary"
  | "secondary"
  | "gray"
  | "empty"
  | "empty gray"
  | "error";
export type ButtonState = "default" | "hover" | "focused" | "disabled";
export type ButtonIcon = "leading" | "trailing" | "only";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  size?: ButtonSize;
  color?: ButtonColor;
  state?: ButtonState;
  icon?: ButtonIcon;
};

const StyledButton = styled.button<{
  color?: ButtonColor;
  size?: ButtonSize;
  state?: ButtonState;
  icon?: ButtonIcon;
  onClick?: () => void;
  children: React.ReactNode;
}>`
  cursor: pointer;

  // remove default button styles
  border: none;
  margin: 0;
  padding: 0;
  background: transparent;
  line-height: normal;
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  -webkit-appearance: none;

  &::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
`;

export function Button({
  color,
  size,
  state,
  icon,
  onClick,
  children,
}: ButtonProps) {
  return (
    <StyledButton
      color={color}
      size={size}
      state={state}
      icon={icon}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
}
