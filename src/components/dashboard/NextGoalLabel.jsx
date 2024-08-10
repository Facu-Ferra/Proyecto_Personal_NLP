/* eslint-disable react/prop-types */
import { Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import {
  COLOR_BLACK_GOAL_BACKGORUND,
  COLOR_RED,
  COLOR_WHITE,
  COLOR_LIGHT_BORDER,
  COLOR_GRAY_DASHBOARD
} from '../../commons/constants/colors'
import edit from '../../../assets/images/UI/edit.png'

const NextGoalLabel = ({
  totalAmount,
  goal,
  onPressNextGoalLabel,
  lightTheme
}) => {
  const handlePress = () => {
    onPressNextGoalLabel?.()
  }

  const renderAmounts = (boolean) => {
    if (!boolean) {
      return (
        <Text style={styles.goal_info}>
          {totalAmount}/{goal}
        </Text>
      )
    } else {
      return <Text style={styles.goal_info_light}> ${goal} </Text>
    }
  }
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[styles.goal_container, lightTheme === true && styles.lightGoal]}>
      <Text
        style={[
          styles.goal_title,
          lightTheme === true && {
            position: 'relative',
            marginLeft: '7%',
            paddingTop: '2%'
          }
        ]}>
        Next Goal:
      </Text>
      {renderAmounts(lightTheme)}
      <Image
        source={edit}
        style={[
          styles.editButton,
          lightTheme === true && { width: '6.5%' }
        ]}></Image>
    </TouchableOpacity>
  )
}

export default NextGoalLabel

const styles = StyleSheet.create({
  goal_container: {
    alignSelf: 'center',
    width: '90%',
    marginTop: '8%',
    height: '12%',
    backgroundColor: COLOR_BLACK_GOAL_BACKGORUND,
    borderRadius: 40,
    flexDirection: 'column',
    alignItems: 'center'
  },
  lightGoal: {
    backgroundColor: COLOR_GRAY_DASHBOARD,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    marginTop: '5%',
    borderWidth: 1,
    borderColor: COLOR_LIGHT_BORDER,
    borderRadius: 20
  },
  goal_title: {
    color: COLOR_RED,
    fontFamily: 'InknutAntiqua_300Light',
    marginTop: '-3%',
    position: 'absolute',
    fontSize: 20
  },
  goal_info: {
    color: COLOR_WHITE,
    fontFamily: 'InknutAntiqua_300Light',
    fontSize: 16,
    bottom: '1%',
    position: 'absolute'
  },
  goal_info_light: {
    color: COLOR_WHITE,
    fontFamily: 'InknutAntiqua_300Light',
    marginRight: '3%',
    fontSize: 18
  },
  editButton: {
    width: '7.2%',
    height: '40%',
    position: 'absolute',
    alignSelf: 'flex-end',
    right: '-2%', // Ajusta la distancia desde el borde derecho
    bottom: '-3%', // Ajusta la distancia desde el borde inferior,
    zIndex: 3
  }
})
