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
      <Text style={styles.goal_title}>Next Goal:</Text>
      {renderAmounts(lightTheme)}
      <Image source={edit} style={styles.editButton}></Image>
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
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  lightGoal: {
    backgroundColor: COLOR_GRAY_DASHBOARD,
    flex: 1,
    marginTop: '5%',
    borderWidth: 1,
    borderColor: COLOR_LIGHT_BORDER,
    borderRadius: 20
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
    marginRight: '3%',
    marginTop: '2%',
    fontSize: 15
  },
  goal_info_light: {
    color: COLOR_WHITE,
    fontFamily: 'InknutAntiqua_300Light',
    alignContent: 'center',
    marginRight: '3%',
    fontSize: 18
  },
  editButton: {
    width: '6%',
    height: '40%',
    position: 'absolute',
    alignSelf: 'flex-end',
    right: '-2%', // Ajusta la distancia desde el borde derecho
    bottom: '-3%', // Ajusta la distancia desde el borde inferior,
    zIndex: 3
  }
})
