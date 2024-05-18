import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { router } from 'expo-router'
import {
  COLOR_GRAY_NEW_PROFILE,
  COLOR_WHITE
} from '../src/commons/constants/colors'
import { BackgroundImage } from '../src/components'

const Profile = () => {
  const handlePress = () => {
    router.back()
  }

  return (
    <BackgroundImage>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.text}>Profile</Text>
          <Button title='Back' onPress={handlePress} />
        </View>
      </View>
    </BackgroundImage>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    alignItems: 'center',
    backgroundColor: COLOR_GRAY_NEW_PROFILE,
    borderRadius: 20,
    borderWidth: 0.5,
    height: '50%',
    width: '80%',
    justifyContent: 'center'
  },
  text: {
    color: COLOR_WHITE,
    fontSize: 25
  }
})
