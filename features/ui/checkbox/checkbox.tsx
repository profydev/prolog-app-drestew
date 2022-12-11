import React, { useState, useRef } from "react";
import styled, { css } from "styled-components";
import { color } from "@styles/theme";

export type CheckboxSize = "small" | "medium";
export type Label = string;

type CheckboxProps = {
  checkboxSize?: CheckboxSize;
  label?: Label;
  type: string;
  className?: string;
  indeterminateForStorybook: boolean;
  checked?: boolean;
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
    content: "";
    width: 0.65em;
    height: 0.65em;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
  }

  &:checked,
  &:indeterminate {
    border-color: ${color("primary", 600)};
  }

  &:checked::before {
    ${() => {
      return css`
        transform-origin: bottom left;
        box-shadow: inset 1em 1em ${color("primary", 600)};
        clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
        transform: scale(1);
      `;
    }}
  }

  &:indeterminate::before {
    ${() => {
      return css`
        transform-origin: left;
        box-shadow: inset 1em 1em ${color("primary", 600)};
        clip-path: polygon(16% 45%, 86% 45%, 86% 65%, 16% 65%);
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
  checked,
  indeterminateForStorybook = false,
}: CheckboxProps) {
  const ref = useRef<HTMLInputElement>(null);
  const [indeterminate, setIndeterminate] = useState(false);

  const checkedStatus = function () {
    if (ref.current != null && !ref.current.checked) {
      ref.current.indeterminate = true;
      setIndeterminate(() => true);
    } else if (ref.current != null && ref.current.checked && indeterminate) {
      ref.current.indeterminate = false;
      ref.current.checked = false;
      setIndeterminate(() => false);
    }
  };

  window.addEventListener("load", () => {
    if (ref.current != null && indeterminateForStorybook) {
      ref.current.indeterminate = true;
    }
  });

  return (
    <Container>
      <StyledCheckbox
        type={type}
        checkboxSize={checkboxSize}
        className={className}
        ref={ref}
        onChange={checkedStatus}
        checked={checked}
      />
      <label htmlFor="checkbox">{label}</label>
    </Container>
  );
}
