
import React from 'react';
import { ScreenA as Home } from "../../../screens/ScreenA";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import '@storybook/addon-actions/register';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from '../../../components/Button';

export default {
  title: "ScreenA",
  component: Home,
  argTypes: {
    onPress: () => { }
  }
} as ComponentMeta<typeof Home>

const Template: ComponentStory<typeof Home> = (args) => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Text>
          Olá mundo!
        </Text>
        <Button onPress={args.onPress} />
      </View>
    </NavigationContainer>
  )
}

export const ScreenWithButtonInteraction = Template.bind({})
ScreenWithButtonInteraction.args = {
  loading: true,
  disabled: true
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3c3',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'

  }
})