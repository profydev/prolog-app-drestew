import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import {
  Button,
  ButtonSize,
  ButtonColor,
  ButtonIcon,
  ButtonState,
} from "./button";

export default {
  component: Button,
  title: "UI/Button",
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button
    color={args.color}
    size={args.size}
    icon={args.icon}
    state={args.state}
  >
    Button CTA
  </Button>
);

export const Default = Template.bind({});
Default.args = {
  size: "small",
  color: "primary",
  state: "default",
};
