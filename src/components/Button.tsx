import React from 'react'
import { ActivityIndicator, StyleSheet, Text, TouchableHighlight, TouchableHighlightProps, View } from 'react-native'


// type ButtonProps = TouchableHighlightProps & {
//   loading?: boolean
// }

export type ButtonProps = TouchableHighlightProps & {
  loading?: boolean
  label?: string
  onPress: () => void
}


export const Button: React.FC<ButtonProps> = ({ loading, label = 'Button', onPress, ...props }) => {
  return (
    <TouchableHighlight
      {...props}
      style={[styles.container, {
        backgroundColor: props.disabled ? "#F11" : styles.container.backgroundColor
      }]}
      onPress={onPress}
    >
      <View>
        {loading &&
          <ActivityIndicator color='#2a2' style={styles.indicator} />
        }
        {!loading &&
          <Text>
            {label}
          </Text>
        }
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#AA11aa',
    alignItems: 'center',
    padding: 20
  },
  indicator: {

  }
})