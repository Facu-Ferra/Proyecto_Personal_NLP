/* eslint-disable react/prop-types */
import React from 'react'
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native'

const LevelIndicator = ({ levelImage, onLevelImagePress }) => {
  const handlePress = () => {
    onLevelImagePress?.()
  }
  return (
    <View style={styles.level_icon}>
      <TouchableOpacity onPress={handlePress}>
        <Image source={levelImage} style={styles.image} />
      </TouchableOpacity>
    </View>
  )
}

export default LevelIndicator

const styles = StyleSheet.create({
  level_icon: {
    zIndex: 1,
    width: '40%',
    aspectRatio: 1,
    position: 'absolute',
    top: '7%',
    alignSelf: 'center'
  },
  image: {
    height: '100%',
    width: '100%'
  }
})
