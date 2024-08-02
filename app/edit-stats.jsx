import React, { useState } from 'react'
import { ImageBackground, StyleSheet, View, Text } from 'react-native'
import { StatDetail, TotalAmount } from '../src/components/edit-stats'
import { StatusBar } from 'expo-status-bar'
import tabern from '../assets/images/tabern.png'
import { NextGoalLabel, NextGoalModal } from '../src/components/dashboard'

import { PROFILES } from '../src/commons/constants/helper.js'
import {
  COLOR_BLACK_GOAL_BACKGORUND,
  COLOR_DARK_BORDER,
  COLOR_WHITE
} from '../src/commons/constants/colors'
import { useLocalSearchParams } from 'expo-router'

export default function App() {
  const { profile_id } = useLocalSearchParams()

  const profile = { ...PROFILES?.[profile_id] }
  const { stats } = { ...profile }

  const totalAmount = stats.reduce((accumulator, stat) => {
    return accumulator + stat.amount
  }, 0)

  const [nextGoalModalVisible, setNextGoalModalVisible] = useState(false)

  const handleNextGoalPress = () => {
    setNextGoalModalVisible(true)
  }

  const handleCloseGoalModal = () => {
    setNextGoalModalVisible(false)
  }

  return (
    <View style={styles.container}>
      <StatusBar style='light'></StatusBar>
      <ImageBackground source={tabern} style={styles.backImage}>
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
              amount={stat.amount}></StatDetail>
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
