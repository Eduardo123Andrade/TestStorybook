import React from 'react'
import { StyleSheet, Text, TouchableHighlight, TouchableHighlightProps } from 'react-native'


type ButtonProps = TouchableHighlightProps


export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <TouchableHighlight
      {...props}
      style={styles.container}
      onPress={() => console.log('oi')}
    >
      <Text>
        Ola
      </Text>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#AA11aa',
    alignItems: 'center',
    padding: 20
  }
})