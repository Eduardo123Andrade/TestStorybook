import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from '../components/Button'
import { Navigation } from '../types'

type ScreenAProps = {}

export const ScreenA: React.FC<ScreenAProps> = (props) => {

  const navigation = useNavigation<Navigation>()

  const onPress = () => navigation.navigate('ScreenB')

  return (
    <View style={styles.container}>
      <Text>
        Olá mundo!
      </Text>
      <Button />
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