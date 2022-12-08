import React from 'react'
import { ActivityIndicator, StyleSheet, Text, TouchableHighlight, TouchableHighlightProps, View } from 'react-native'


// type ButtonProps = TouchableHighlightProps & {
//   loading?: boolean
// }

export type ButtonProps = {
  loading?: boolean

}


// export const Button: React.FC<ButtonProps> = (props) => {
export const Button: React.FC<ButtonProps> = ({ loading }) => {
  return (
    <TouchableHighlight
      // {...props}
      style={styles.container}
      onPress={() => console.log('oi')}
    >
      <View>
        {loading &&
          <ActivityIndicator color='#2a2' style={styles.indicator} />
        }
        {!loading &&
          <Text>
            Ola
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