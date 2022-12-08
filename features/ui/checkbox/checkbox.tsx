import React from "react";
import styled, { css } from "styled-components";
import { color, textFont } from "@styles/theme";

export type CheckboxSize = "small" | "medium";
export type CheckboxChecked = boolean;
export type CheckboxIndeterminate = boolean;

type CheckboxProps = {
  // children: React.ReactNode;
  // onClick?: () => void;
  // size?: CheckboxSize;
  indeterminate?: boolean;
  type?: string;
  value?: string;
};

const Container = styled.div`
  //display: flex;
  //align-items: center;
  //justify-content: center;
  display: grid;
  grid-template-columns: 1em auto;
  gap: 0.5em;
  place-content: center;
`;
const StyledCheckbox = styled.input<{
  // children: React.ReactNode;
  type?: string;
  // size?: CheckboxSize;
  indeterminate?: boolean;
  value?: string;
}>`
  appearance: none;
  font: inherit;
  width: 1.15em;
  height: 1.15em;
  border: 1px solid black;
  border-radius: 0.15em;
  transform: translateY(-0.075em);
  color: black;
  display: grid;
  place-content: center;

  &::before {
    ${() => {
      return css`
        content: "";
        width: 0.65em;
        height: 0.65em;
        transform: scale(0);
        transition: 120ms transform ease-in-out;
        box-shadow: inset 1em 1em ${color("primary", 600)};
        //background-color: ${color("primary", 600)}

        transform-origin: bottom left;
        clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
      `;
    }}
  }

  &:checked::before {
    ${() => {
      return css`
        transform: scale(1);
        // content: "";
        // width: 0.65em;
        // height: 0.65em;
        // transform: scale(0);
        // transition: 120ms transform ease-in-out;
        // box-shadow: inset 1em 1em ${color("primary", 600)};
      `;
    }}
  }

  &:focus {
    outline: max(2px, 0.15em) solid red;
    outline-offset: max(2px, 0.15em);
  }
`;

export function Checkbox({
  value,
  // size = "medium",
  indeterminate = false,
}: CheckboxProps) {
  return (
    <Container>
      <StyledCheckbox
        type="checkbox"
        value="checkbox"
        // size={size}
        indeterminate={indeterminate}
        className="default"
      />
      <label htmlFor="checkbox" className="checkbox-label">
        Label
      </label>
    </Container>
  );
}
