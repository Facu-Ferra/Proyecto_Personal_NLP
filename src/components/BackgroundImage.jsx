/* eslint-disable react/prop-types */
import React from 'react'
import { ImageBackground, StyleSheet } from 'react-native'

import tabern from '../../assets/images/tabern.png'

const BackgroundImage = ({ children }) => {
  return (
    <ImageBackground source={tabern} style={styles.backImage}>
      {children}
    </ImageBackground>
  )
}

export default BackgroundImage

const styles = StyleSheet.create({
  backImage: {
    flex: 1,
    resizeMode: 'cover'
  }
})
