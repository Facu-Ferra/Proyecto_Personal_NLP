import React from 'react'
import { ImageBackground, StyleSheet, Text, Image, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import Stat from '../src/components/Stat.jsx'
import NavBar from '../src/components/NavBar.jsx'
import tabern from '../assets/images/tabern.png'
import AppLoading from 'expo-app-loading'
import { PROFILES } from '../src/commons/constants/helper.js'

import {
  useFonts,
  InknutAntiqua_300Light,
  InknutAntiqua_600SemiBold
} from '@expo-google-fonts/inknut-antiqua'
import {
  COLOR_GRAY_DASHBOARD,
  COLOR_WHITE,
  COLOR_PALADIN,
  COLOR_BROWN_DASHBOARD,
  COLOR_BLACK_GOAL_BACKGORUND,
  COLOR_RED
} from '../src/commons/constants/colors'
import { useLocalSearchParams } from 'expo-router'

export default function App() {
  let [fontsLoaded] = useFonts({
    InknutAntiqua_300Light,
    InknutAntiqua_600SemiBold
  })

  const { profile_id } = useLocalSearchParams()

  const totalAmount = PROFILES[profile_id].stats.reduce((accumulator, stat) => {
    return accumulator + stat.amount
  }, 0)

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <View style={styles.container}>
        <StatusBar style='light'></StatusBar>
        <ImageBackground source={tabern} style={styles.backImage}>
          <View style={styles.content}>
            <View style={styles.character}>
              <View style={styles.character_text}>
                <Text
                  style={[
                    styles.character_name,
                    { textShadowColor: PROFILES[profile_id].color }
                  ]}>
                  {PROFILES[profile_id].text}
                </Text>
                <Text style={styles.stats}>
                  Class: {PROFILES[profile_id].class}
                </Text>
                <Text style={[styles.stats, { top: '60%' }]}>
                  Title: {PROFILES[profile_id].title}
                </Text>
              </View>
              <Image
                source={PROFILES[profile_id].photo}
                style={styles.profileImage}></Image>
            </View>
            <View style={styles.main_stats_container}>
              <Text style={styles.main_stats_title}>Main Attributes</Text>
              <View style={styles.row}>
                <Stat
                  image={PROFILES[profile_id].stats[0].image}
                  stat={PROFILES[profile_id].stats[0].name}
                  amount={PROFILES[profile_id].stats[0].amount}></Stat>
                <Stat
                  image={PROFILES[profile_id].stats[1].image}
                  stat={PROFILES[profile_id].stats[1].name}
                  amount={PROFILES[profile_id].stats[1].amount}></Stat>
              </View>
              <View style={styles.row}>
                <Stat
                  image={PROFILES[profile_id].stats[2].image}
                  stat={PROFILES[profile_id].stats[2].name}
                  amount={PROFILES[profile_id].stats[2].amount}></Stat>
                <Stat
                  image={PROFILES[profile_id].stats[3].image}
                  stat={PROFILES[profile_id].stats[3].name}
                  amount={PROFILES[profile_id].stats[3].amount}></Stat>
              </View>
            </View>
            <View style={styles.goal_container}>
              <Text style={styles.goal_title}>Next Goal:</Text>
              <Text style={styles.goal_info}>
                {totalAmount}/{PROFILES[profile_id].goal}
              </Text>
            </View>
          </View>

          <Image
            source={PROFILES[profile_id].level}
            style={styles.level_icon}></Image>

          <NavBar></NavBar>
        </ImageBackground>
      </View>
    )
  }
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
  level_icon: {
    width: 160,
    height: 160,
    position: 'absolute',
    top: '7%',
    alignSelf: 'center'
  },
  content: {
    marginTop: 60,
    alignSelf: 'center',
    width: '90%',
    height: '65%',
    marginBottom: '20%',
    backgroundColor: COLOR_GRAY_DASHBOARD,
    borderRadius: 40,
    position: 'relative'
  },
  profileImage: {
    width: '38%',
    height: '80%',
    alignSelf: 'baseline',
    right: 15,
    top: 15,
    borderRadius: 40,
    position: 'absolute'
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
    height: '38%',
    backgroundColor: COLOR_BROWN_DASHBOARD,
    borderRadius: 40,
    position: 'relative'
  },
  main_stats_title: {
    color: COLOR_WHITE,
    fontFamily: 'InknutAntiqua_300Light',
    alignSelf: 'center',
    fontSize: 25
  },
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
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 12,
    marginLeft: 20
  }
})
