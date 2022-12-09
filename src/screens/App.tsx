import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Navigator } from '../navigators/Navigator';

export const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  )
}