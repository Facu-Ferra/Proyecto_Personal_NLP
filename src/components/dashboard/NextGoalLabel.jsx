/* eslint-disable react/prop-types */
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import {
  COLOR_BLACK_GOAL_BACKGORUND,
  COLOR_RED,
  COLOR_WHITE
} from '../../commons/constants/colors'

const NextGoalLabel = ({ totalAmount, goal, onPressNextGoalLabel }) => {
  const handlePress = () => {
    onPressNextGoalLabel?.()
  }
  return (
    <TouchableOpacity onPress={handlePress} style={styles.goal_container}>
      <Text style={styles.goal_title}>Next Goal:</Text>
      <Text style={styles.goal_info}>
        {totalAmount}/{goal}
      </Text>
    </TouchableOpacity>
  )
}

export default NextGoalLabel

const styles = StyleSheet.create({
  goal_container: {
    alignSelf: 'center',
    width: '90%',
    marginTop: '10%',
    height: '10%',
    backgroundColor: COLOR_BLACK_GOAL_BACKGORUND,
    borderRadius: 40,
    flexDirection: 'row'
  },
  goal_title: {
    color: COLOR_RED,
    fontFamily: 'InknutAntiqua_300Light',
    marginLeft: '7%',
    fontSize: 20
  },
  goal_info: {
    color: COLOR_WHITE,
    fontFamily: 'InknutAntiqua_300Light',
    marginTop: 7,
    marginLeft: 4,
    fontSize: 15
  }
})
