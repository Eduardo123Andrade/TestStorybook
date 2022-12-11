import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from '../components/Button'

type ScreenBProps = {}

export const ScreenB: React.FC<ScreenBProps> = (props) => {

  const navigation = useNavigation()

  const onPress = () => navigation.goBack()

  return (
    <View style={styles.container}>
      <Text>
        Olá mundo!
      </Text>
      <Button onPress={onPress} />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3c3aa1',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})