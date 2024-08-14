import React, { useState } from 'react'
import { ImageBackground, StyleSheet, Text, Image, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { useLocalSearchParams } from 'expo-router'
import tabern from '../assets/images/backgrounds/tabern.png'
import { PROFILES } from '../src/commons/constants/helper.js'
import {
  COLOR_GRAY_DASHBOARD,
  COLOR_WHITE,
  COLOR_PALADIN,
  COLOR_BROWN_DASHBOARD,
  COLOR_DARK_BORDER
} from '../src/commons/constants/colors'
import Stat from '../src/components/Stat.jsx'
import NavBar from '../src/components/NavBar.jsx'
import {
  LevelIndicator,
  LevelsModal,
  NextGoalLabel,
  NextGoalModal
} from '../src/components/dashboard'

export default function App() {
  const { profile_id } = useLocalSearchParams()
  const profile = { ...PROFILES?.[profile_id] }
  const {
    text,
    photo,
    level,
    title,
    color,
    stats,
    class: className,
    // crew,
    goal
  } = { ...profile }

  const totalAmount = stats.reduce((accumulator, stat) => {
    return accumulator + stat.amount
  }, 0)

  const [levelModalVisible, setLevelsModalVisible] = useState(false)
  const [nextGoalModalVisible, setNextGoalModalVisible] = useState(false)

  const handleLevelImagePress = () => {
    setLevelsModalVisible(true)
  }

  const handleCloseModal = () => {
    setLevelsModalVisible(false)
  }

  const handleNextGoalPress = () => {
    setNextGoalModalVisible(true)
  }

  const handleCloseGoalModal = () => {
    setNextGoalModalVisible(false)
  }

  return (
    <View style={styles.container}>
      <StatusBar style='light' />
      <ImageBackground source={tabern} style={styles.backImage} blurRadius={1}>
        <View style={styles.content}>
          <View style={styles.character}>
            <View style={styles.character_text}>
              <Text style={[styles.character_name, { textShadowColor: color }]}>
                {text}
              </Text>
              <Text style={styles.stats}>Class: {className}</Text>
              <Text style={[styles.stats, { top: '60%' }]}>Title: {title}</Text>
            </View>
            <Image source={photo} style={styles.profileImage} />
          </View>
          <View style={styles.main_stats_container}>
            <Text style={styles.main_stats_title}>Main Attributes</Text>
            <View style={styles.row}>
              <Stat
                image={stats[0].image}
                stat={stats[0].name}
                amount={stats[0].amount}
              />
              <Stat
                image={stats[1].image}
                stat={stats[1].name}
                amount={stats[1].amount}
              />
            </View>
            <View style={styles.row}>
              <Stat
                image={stats[2].image}
                stat={stats[2].name}
                amount={stats[2].amount}
              />
              <Stat
                image={stats[3].image}
                stat={stats[3].name}
                amount={stats[3].amount}
              />
            </View>
          </View>
          <NextGoalLabel
            totalAmount={totalAmount}
            goal={goal}
            onPressNextGoalLabel={handleNextGoalPress}
          />
        </View>
        <LevelIndicator
          levelImage={level}
          onLevelImagePress={handleLevelImagePress}
        />
        <NavBar profile={profile_id} />
      </ImageBackground>
      <LevelsModal
        visible={levelModalVisible}
        levelImage={level}
        onClose={handleCloseModal}
      />
      <NextGoalModal
        currentGoal={goal}
        visible={nextGoalModalVisible}
        // levelImage={level}
        onClose={handleCloseGoalModal}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  backImage: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    resizeMode: 'cover'
  },
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  content: {
    marginTop: 60,
    alignSelf: 'center',
    width: '90%',
    height: '65%',
    marginBottom: '20%',
    backgroundColor: COLOR_GRAY_DASHBOARD,
    borderRadius: 40,
    position: 'relative',
    borderWidth: 1.5,
    borderColor: COLOR_DARK_BORDER
  },
  profileImage: {
    width: '38%',
    height: '80%',
    alignSelf: 'baseline',
    right: 15,
    top: 15,
    borderRadius: 40,
    position: 'absolute',
    borderWidth: 1,
    borderColor: COLOR_DARK_BORDER
  },
  character: {
    flexDirection: 'row',
    width: '100%',
    height: '40%'
  },
  character_text: {
    height: '80%',
    width: '100%',
    top: 0,
    marginLeft: 10,
    marginTop: 25
  },
  character_name: {
    color: COLOR_WHITE,
    fontFamily: 'InknutAntiqua_300Light',
    fontSize: 30,
    position: 'relative',
    textShadowColor: COLOR_PALADIN, // Glow color
    textShadowOffset: { width: 0, height: 1 }, // Shadow offset
    textShadowRadius: 12
  },
  stats: {
    color: COLOR_WHITE,
    fontFamily: 'InknutAntiqua_300Light',
    fontSize: 16,
    position: 'absolute',
    top: '40%'
  },
  main_stats_container: {
    alignSelf: 'center',
    width: '90%',
    paddingBottom: 5,
    backgroundColor: COLOR_BROWN_DASHBOARD,
    borderRadius: 40,
    position: 'relative',
    borderWidth: 1.5,
    borderColor: COLOR_DARK_BORDER
  },
  main_stats_title: {
    color: COLOR_WHITE,
    fontFamily: 'InknutAntiqua_300Light',
    alignSelf: 'center',
    fontSize: 25
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 12,
    marginLeft: 20
  }
})
