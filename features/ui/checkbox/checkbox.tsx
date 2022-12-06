import React from "react";
import styled, { css } from "styled-components";
import { color, textFont } from "@styles/theme";

export type CheckboxSize = "small" | "medium";
export type CheckboxChecked = true | false;
export type CheckboxIndeterminate = true | false;
export type CheckboxState = "default" | "hover" | "focus" | "disabled";

type CheckboxProps = {
  children: React.ReactNode;
  onClick?: () => void;
  size: CheckboxSize;
  checked: CheckboxChecked;
  indeterminate: CheckboxIndeterminate;
  state: CheckboxState;
};
