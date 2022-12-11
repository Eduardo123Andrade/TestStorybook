
import React from 'react';
import { ScreenA } from "../../../src/screens/ScreenA";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import '@storybook/addon-actions/register';
import { NavigationContainer } from '@react-navigation/native';

export default {
  title: "ScreenA",
  component: ScreenA,
} as ComponentMeta<typeof ScreenA>

export const Screen: ComponentStory<typeof ScreenA> = (args) => {
  return (
    <NavigationContainer>
      <ScreenA />
    </NavigationContainer>
  )
}