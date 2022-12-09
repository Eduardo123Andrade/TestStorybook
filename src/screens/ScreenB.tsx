import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

type ScreenBProps = {}

export const ScreenB: React.FC<ScreenBProps> = (props) => {
  return (
    <View style={styles.container}>
      <Text>
        Olá mundo!
      </Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3c3',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})