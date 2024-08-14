/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React, { useState } from 'react'
import { ImageBackground, StyleSheet, View, Text } from 'react-native'
import {
  StatDetail,
  TotalAmount,
  NewLevelModal
} from '../src/components/edit-stats'
import { StatusBar } from 'expo-status-bar'
import tabern from '../assets/images/backgrounds/tabern.png'
import { NextGoalLabel, NextGoalModal } from '../src/components/dashboard'

import { PROFILES } from '../src/commons/constants/helper.js'
import {
  COLOR_BLACK_GOAL_BACKGORUND,
  COLOR_DARK_BORDER,
  COLOR_WHITE
} from '../src/commons/constants/colors'
import { useLocalSearchParams } from 'expo-router'

const levelsImages = [
  require('../assets/images/level-icon/1.png'),
  require('../assets/images/level-icon/2.png'),
  require('../assets/images/level-icon/3.png'),
  require('../assets/images/level-icon/4.png'),
  require('../assets/images/level-icon/5.png'),
  require('../assets/images/level-icon/6.png'),
  require('../assets/images/level-icon/7.png'),
  require('../assets/images/level-icon/8.png'),
  require('../assets/images/level-icon/9.png'),
  require('../assets/images/level-icon/10.png')
]

export default function App() {
  const { profile_id } = useLocalSearchParams()

  const profile = { ...PROFILES?.[profile_id] }
  const { stats } = { ...profile }

  const totalAmount = stats.reduce((accumulator, stat) => {
    return accumulator + stat.amount
  }, 0)

  const [nextGoalModalVisible, setNextGoalModalVisible] = useState(false)
  const [newLevelModalVisible, setNewLevelModalVisible] = useState(false)

  const handleNextGoalPress = () => {
    setNextGoalModalVisible(true)
  }

  const handleCloseGoalModal = () => {
    setNextGoalModalVisible(false)
  }

  const handleNextLevelPress = () => {
    setNewLevelModalVisible(false)
  }

  const checkValue = (value) => {
    value = Number(value)
    numberTotalAmount = Number(totalAmount)
    if (value + numberTotalAmount >= profile.goal) {
      console.log('!!Goal superado!!')
      //Aca enrealidad deberia ir primero otro modal preguntando al usuario si esta seguro de el cambio
      //porque sino por ahi entran al flujo de cambio de nivel sin querer (suponiendo por ejemplo que pusieron un cero de mas)

      //Comienza flujo de cambio de nivel
      setNewLevelModalVisible(true)
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar style='light'></StatusBar>
      <ImageBackground source={tabern} style={styles.backImage} blurRadius={1}>
        <View style={styles.contentWrapper}>
          <Text
            style={{
              fontFamily: 'InknutAntiqua_300Light',
              color: COLOR_WHITE,
              alignSelf: 'center',
              fontSize: 23
            }}>
            Stats
          </Text>
          {stats.map((stat) => (
            <StatDetail
              key={stat.name}
              image={stat.image}
              stat={stat.name}
              amount={stat.amount}
              onNewValue={checkValue}></StatDetail>
          ))}

          <View style={styles.amountsWrapper}>
            <TotalAmount value={totalAmount}></TotalAmount>
            <NextGoalLabel
              goal={profile.goal}
              onPressNextGoalLabel={handleNextGoalPress}
              lightTheme={true}></NextGoalLabel>
            <NextGoalModal
              currentGoal={profile.goal}
              visible={nextGoalModalVisible}
              // levelImage={level}
              onClose={handleCloseGoalModal}></NextGoalModal>
            <NewLevelModal
              image={levelsImages[2]}
              onAgreeButtonPress={handleNextLevelPress}
              visible={newLevelModalVisible}></NewLevelModal>
          </View>
        </View>
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
    flex: 1,
    flexDirection: 'column'
  },
  contentWrapper: {
    marginTop: '16%',
    alignSelf: 'center',
    flexDirection: 'column',
    alignItems: 'start',
    width: '90%',
    height: '86%',
    backgroundColor: COLOR_BLACK_GOAL_BACKGORUND,
    borderWidth: 2,
    borderColor: COLOR_DARK_BORDER,
    borderRadius: 40
  },
  amountsWrapper: {
    height: '20%'
  }
})
