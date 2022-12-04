import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./button";

export default {
  component: Button,
  title: "UI/Button",
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button color={args.color} size={args.size} icon={args.icon}>
    Button CTA
  </Button>
);

export const Default = Template.bind({});
Default.args = {
  size: "medium",
  color: "primary",
};
