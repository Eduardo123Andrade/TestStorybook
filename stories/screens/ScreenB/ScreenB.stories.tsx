
import React from 'react';
import { ScreenB } from "../../../src/screens/ScreenB";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import '@storybook/addon-actions/register';
import { NavigationContainer } from '@react-navigation/native';

export default {
  title: "ScreenB",
  component: ScreenB,
} as ComponentMeta<typeof ScreenB>

const Template: ComponentStory<typeof ScreenB> = (args) => {
  return (
    <NavigationContainer>
      <ScreenB {...args} />
    </NavigationContainer>
  )
}

export const ScreenBStory = Template.bind({})
ScreenBStory.args = {
  loading: true,
  disabled: true
}