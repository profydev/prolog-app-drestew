import React from "react";
import styled, { css } from "styled-components";
import { color, textFont } from "@styles/theme";

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
  icon?: ButtonIcon;
};

const StyledButton = styled.button<{
  color?: ButtonColor;
  size?: "small" | "medium" | "large" | "xlarge";
  icon?: ButtonIcon;
  onClick?: () => void;
  children: React.ReactNode;
}>`
  cursor: pointer;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;

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
          font-size: ${textFont("md", "medium")};
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
  }}}

  ${(props) => {
    switch (props.icon) {
      case "leading":
        return css`
          &::before {
            content: "";
            display: inline-block;
            width: 1rem;
            height: 1rem;
            border-radius: 1rem;
            border: solid white 1.5px;
            margin-right: 0.5rem;
            margin-bottom: 2px;
          }
        `;
      case "trailing":
        return css`
          &::after {
            content: "";
            display: inline-block;
            width: 1em;
            height: 1em;
            border-radius: 1rem;
            border: solid white 1.5px;
            margin-left: 0.5em;
            margin-bottom: 2px;
          }
        `;
      case "only":
        return css`
          &::after {
            content: "";
            width: 1em;
            height: 1em;
            border-radius: 1rem;
            border: solid white 1.5px;
          }
        `;
    }
  }}

  &:hover {
    ${(props) => {
      switch (props.color) {
        case "primary":
          return css`
            background-color: ${color("primary", 700)};
          `;
        case "secondary":
          return css`
            color: ${color("primary", 700)};
            background-color: ${color("primary", 100)};
          `;
        case "gray":
          return css`
            color: ${color("gray", 800)};
            background-color: ${color("gray", 50)};
            border: solid 1px ${color("gray", 300)};
          `;
        case "empty":
          return css`
            color: ${color("primary", 700)};
            background-color: ${color("primary", 50)};
          `;
        case "empty gray":
          return css`
            color: ${color("gray", 600)};
            background-color: ${color("gray", 50)};
          `;
        case "error":
          return css`
            color: #fff;
            background-color: ${color("error", 700)};
          `;
      }
    }} 
    
  &:focus {
    position: relative;
    top: -4px;
    left: -4px;
    ${(props) => {
      switch (props.color) {
        case "primary":
          return css`
            background-color: ${color("primary", 600)};
            border: solid 4px ${color("primary", 100)};
          `;
        case "secondary":
          return css`
            color: ${color("primary", 700)};
            border: solid 4px ${color("primary", 100)};
          `;
        case "gray":
          return css`
            color: ${color("gray", 700)};
            border: solid 4px ${color("gray", 300)};
            background-color: #fff;
          `;
        case "empty":
          return css`
            color: ${color("primary", 700)};
          `;
        case "empty gray":
          return css`
            color: ${color("gray", 500)};
          `;
        case "error":
          return css`
            color: #fff;
            background-color: ${color("error", 600)};
            border: solid 4px ${color("error", 100)};
          `;
      }
    }}
  }
    
  &:disabled {
    ${(props) => {
      switch (props.color) {
        case "primary":
          return css`
            background-color: ${color("primary", 200)};
          `;
        case "secondary":
          return css`
            color: ${color("primary", 300)};
            background-color: ${color("primary", 25)};
          `;
        case "gray":
          return css`
            color: ${color("gray", 300)};
            border: solid 4px ${color("gray", 200)};
            background-color: #fff;
          `;
        case "empty":
          return css`
            color: ${color("gray", 300)};
          `;
        case "empty gray":
          return css`
            color: ${color("gray", 300)};
          `;
        case "error":
          return css`
            background-color: ${color("error", 200)};
          `;
      }
    }}
  }
`;

export function Button({ color, size, icon, onClick, children }: ButtonProps) {
  return (
    <StyledButton color={color} size={size} icon={icon} onClick={onClick}>
      {icon !== "only" && children}
    </StyledButton>
  );
}
