// import { NavigationContainer } from '@react-navigation/native'
// import { createStackNavigator } from '@react-navigation/stack'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { View, Text } from 'react-native'
import { ScreenA, ScreenB } from '../screens'

const Stack = createNativeStackNavigator()

type NavigatorProps = {}

export const Navigator: React.FC<NavigatorProps> = (props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='ScreenA'
        component={ScreenA}
      />
      <Stack.Screen
        name='ScreenB'
        component={ScreenB}
      />
    </Stack.Navigator>
  )
}