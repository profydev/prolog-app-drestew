import React from "react";
import styled, { css } from "styled-components";
import { color } from "@styles/theme";

export type CheckboxSize = "small" | "medium";
export type Label = string;

type CheckboxProps = {
  checkboxSize?: CheckboxSize;
  label?: Label;
  indeterminate?: boolean;
  type: string;
  className?: string;
};

const Container = styled.div`
  font-size: 1rem;
  display: grid;
  gap: 0.5em;
  place-content: center;
  grid-template-columns: 1em auto;
`;

const StyledCheckbox = styled.input<{
  checkboxSize?: CheckboxSize;
  label?: Label;
}>`
  appearance: none;
  font: inherit;
  border: 1px solid ${color("gray", 300)};
  border-radius: 0.15em;
  transform: translateY(-0.075em);
  color: black;
  display: grid;
  place-content: center;

  ${(props) => {
    switch (props.checkboxSize) {
      case "small":
        return css`
          width: 0.875em;
          height: 0.875em;
        `;
      case "medium":
        return css`
          width: 1em;
          height: 1em;
        `;
    }
  }};

  &::before {
    ${() => {
      return css`
        content: "";
        width: 0.65em;
        height: 0.65em;
        transform: scale(0);
        transition: 120ms transform ease-in-out;
        box-shadow: inset 1em 1em ${color("primary", 600)};

        transform-origin: bottom left;
        clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
      `;
    }}
  }

  &:checked::before {
    ${() => {
      return css`
        transform: scale(1);
      `;
    }}
  }
`;

export function Checkbox({
  checkboxSize = "medium",
  type = "checkbox",
  className = "default",
  label,
}: CheckboxProps) {
  return (
    <Container>
      <StyledCheckbox
        type={type}
        checkboxSize={checkboxSize}
        className={className}
      />
      <label htmlFor="checkbox">{label}</label>
    </Container>
  );
}
