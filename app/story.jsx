import React from 'react'
import { ImageBackground, StyleSheet, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { useLocalSearchParams } from 'expo-router'
import background1 from '../assets/images/backgrounds/chapter1.png'
import background2 from '../assets/images/backgrounds/chapter2.png'
import background3 from '../assets/images/backgrounds/chapter3.png'
import background4 from '../assets/images/backgrounds/chapter4.png'

import {
  COLOR_BLACK_GOAL_BACKGORUND,
  COLOR_DARK_BORDER
} from '../src/commons/constants/colors'

export default function App() {
  const { chapter_id } = useLocalSearchParams()
  console.log(chapter_id)
  let background = background1
  switch (Number(chapter_id)) {
    case 1:
      background = background1
      break
    case 2:
      background = background2
      break
    case 3:
      background = background3
      break
    case 4:
      background = background4
      break
    default:
      // Optional: Add a default case if needed
      background = background1
      break
  }

  return (
    <View style={styles.container}>
      <StatusBar style='light' />
      <ImageBackground
        source={background}
        style={styles.backImage}
        blurRadius={1}>
        <View style={styles.contentWrapper}></View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  backImage: {
    flex: 1,
    resizeMode: 'cover'
  },
  container: {
    flex: 1
  },
  contentWrapper: {
    width: '90%',
    marginTop: '20%',
    alignSelf: 'center',
    flex: 1,
    marginBottom: '10%',
    backgroundColor: COLOR_BLACK_GOAL_BACKGORUND,
    borderWidth: 2,
    borderColor: COLOR_DARK_BORDER,
    borderRadius: 30
  }
})
