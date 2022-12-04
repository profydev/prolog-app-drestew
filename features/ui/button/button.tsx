import React from "react";
import styled, { css } from "styled-components";
import { color, textFont, space } from "@styles/theme";

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
  size?: "small" | "medium" | "large" | "xlarge";
  state?: ButtonState;
  icon?: ButtonIcon;
  onClick?: () => void;
  children: React.ReactNode;
}>`
  cursor: pointer;
  border-radius: 8px;

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

  ${(props) => {
    switch (props.size) {
      case "small":
        return css`
          font-size: ${textFont("sm", "medium")};
          padding: 0.5rem 0.875rem;
        `;
      case "medium":
        return css`
          font-size: ${textFont("sm", "medium")};
          padding: 0.625rem 1rem;
        `;
      case "large":
        return css`
          font-size: ${textFont("md", "regular")};
          padding: 0.625rem 1.125rem;
        `;
      case "xlarge":
        return css`
          font-size: ${textFont("md", "medium")};
          padding: 0.75rem 1.25rem;
        `;
      default:
        return css`
          font-size: ${textFont("sm", "medium")};
          padding: 0.625rem 1rem;
        `;
    }
  }}

  ${(props) => {
    switch (props.color) {
      case "primary":
        return css`
          color: #fff;
          background-color: ${color("primary", 600)};
        `;
      case "secondary":
        return css`
          color: ${color("primary", 700)};
          background-color: ${color("primary", 50)};
        `;
      case "gray":
        return css`
          color: ${color("gray", 700)};
          background-color: #fff;
          border: solid 1px ${color("gray", 300)};
        `;
      case "empty":
        return css`
          color: ${color("primary", 700)};
          background-color: #fff;
        `;
      case "empty gray":
        return css`
          color: ${color("gray", 500)};
          background-color: #fff;
        `;
      case "error":
        return css`
          color: #fff;
          background-color: ${color("error", 600)};
        `;
    }
  }}
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
