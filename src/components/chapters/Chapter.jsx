/* TODO hacer no requeridas */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity
} from 'react-native'
const { width, height } = Dimensions.get('window')
import React from 'react'
import {
  COLOR_WHITE,
  COLOR_DARK_BORDER,
  COLOR_DARK_GRAY_70,
  COLOR_DARK_GRAY_50,
  COLOR_WHITE_45
} from '../../commons/constants/colors'
import { router } from 'expo-router'

const Chapter = ({ title, lock, id }) => {
  if (lock) title = '   - Locked'
  return (
    <TouchableOpacity
      style={{ height: Math.min(width, height) * 0.17, marginVertical: '2%' }}
      onPress={() => goToRoute(lock, id)}>
      <View
        style={[
          styles.container,
          lock === true && { backgroundColor: COLOR_DARK_GRAY_50 }
        ]}>
        <View style={styles.textContainer}>
          <Text
            style={[styles.stat, lock === true && { color: COLOR_WHITE_45 }]}>
            {title}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const goToRoute = (lock, id) => {
  if (!lock) {
    router.push('/story?chapter_id=' + id)
  }
}

export default Chapter

const styles = StyleSheet.create({
  container: {
    height: '100%',
    marginVertical: '1%',
    marginHorizontal: '5%',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR_DARK_GRAY_70,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: COLOR_DARK_BORDER
  },
  stat: {
    color: COLOR_WHITE,
    fontFamily: 'InknutAntiqua_300Light',
    fontSize: 16,
    alignContent: 'center'
  },
  textContainer: {
    position: 'relative',
    justifyContent: 'start',
    flexDirection: 'row',
    width: '100%',
    marginLeft: '27%'
  }
})
