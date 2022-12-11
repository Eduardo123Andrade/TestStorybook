
import React from 'react';
import { Button as ButtonComponent } from "../../../src/components/Button";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import '@storybook/addon-actions/register';

export default {
  title: "Buttons",
  component: ButtonComponent,
  argTypes: {
    onPress: () => { }
  }
} as ComponentMeta<typeof ButtonComponent>

const Template: ComponentStory<typeof ButtonComponent> = (args) => <ButtonComponent {...args} />

export const Button = Template.bind({})
Button.args = {
  loading: false,
  disabled: false,
}