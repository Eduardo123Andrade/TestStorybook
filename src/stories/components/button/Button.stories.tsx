
import React from 'react';
import { Button } from "../../../components/Button";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import '@storybook/addon-actions/register';

export default {
  title: "Button",
  component: Button,
  argTypes: {
    onPress: () => { }
  }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Button1 = Template.bind({})
Button1.args = {
  loading: false,
  disabled: false,
}