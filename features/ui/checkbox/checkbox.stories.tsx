import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Checkbox } from "./checkbox";

export default {
  component: Checkbox,
  title: "UI/Checkbox",
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox indeterminate={args.indeterminate} />
);

export const Default = Template.bind({});
Default.args = {
  indeterminate: false,
};
