import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Checkbox } from "./checkbox";

export default {
  component: Checkbox,
  title: "UI/Checkbox",
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox
    type={args.type}
    checkboxSize={args.checkboxSize}
    label={args.label}
  />
);

export const Default = Template.bind({});
Default.args = {
  ...Template.args,
};

export const Small = Template.bind({});
Small.args = {
  checkboxSize: "small",
};

export const Medium = Template.bind({});
Medium.args = {
  checkboxSize: "medium",
};

export const Label = Template.bind({});
Label.args = {
  label: "Label",
};