import React from 'react'
import {
  ImageBackground,
  StyleSheet,
  Text,
  Image,
  View,
  StatusBar
} from 'react-native'
import tabern from '../assets/images/tabern.png'
import level1 from '../assets/images/level-icon/1.png'
import level10 from '../assets/images/level-icon/10.png'
import AppLoading from 'expo-app-loading'
import character1 from '../assets/characters/paladin.jpg'
import character2 from '../assets/characters/necromancer.jpg'
import {
  useFonts,
  InknutAntiqua_300Light,
  InknutAntiqua_600SemiBold
} from '@expo-google-fonts/inknut-antiqua'
import {
  COLOR_GRAY_DASHBOARD,
  COLOR_WHITE,
  COLOR_PALADIN
} from '../src/commons/constants/colors'
import { useLocalSearchParams } from 'expo-router'

export default function App() {
  let [fontsLoaded] = useFonts({
    InknutAntiqua_300Light,
    InknutAntiqua_600SemiBold
  })

  const { profile_id } = useLocalSearchParams()
  console.log({ profile_id })

  let profiles = [
    {
      text: 'Benoffi',
      photo: character1,
      class: 'Paladin',
      level: level1,
      title: 'Young soldier'
    },
    {
      text: 'Chaldu',
      photo: character2,
      class: 'Necromancer',
      level: level10,
      title: 'King of Ashes'
    }
  ]

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <View style={styles.container}>
        <StatusBar style='dark'></StatusBar>
        <ImageBackground source={tabern} style={styles.backImage}>
          <View style={styles.content}>
            <View style={styles.character}>
              <View style={styles.character_text}>
                <Text style={styles.character_name}>
                  {profiles[profile_id].text}
                </Text>
                <View style={styles.stats_container}>
                  <Text style={styles.stats}>
                    Class: {profiles[profile_id].class}
                  </Text>
                  <Text style={styles.stats}>
                    Title: {profiles[profile_id].title}
                  </Text>
                </View>
              </View>
              <Image
                source={profiles[profile_id].photo}
                style={styles.profileImage}></Image>
            </View>
          </View>
          <Image
            source={profiles[profile_id].level}
            style={styles.level_icon}></Image>
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
    top: '3%',
    alignSelf: 'center'
  },
  content: {
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
    alignSelf: 'center',
    marginRight: 35,
    borderRadius: 40
  },
  character: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 'auto',
    height: '40%'
  },
  character_text: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    height: '80%',
    marginLeft: 25
  },
  character_name: {
    color: COLOR_WHITE,
    fontFamily: 'InknutAntiqua_300Light',
    fontSize: 30,
    marginTop: '50%',
    marginLeft: '5%',
    position: 'relative',
    textShadowColor: COLOR_PALADIN, // Glow color
    textShadowOffset: { width: -1, height: 1 }, // Shadow offset
    textShadowRadius: 12
  },
  stats_container: {
    justifyContent: 'flex-end'
  },
  stats: {
    color: COLOR_WHITE,
    fontFamily: 'InknutAntiqua_300Light',
    fontSize: 16,
    marginLeft: '5%',
    position: 'relative',
    textShadowColor: COLOR_PALADIN, // Glow color
    textShadowOffset: { width: -1, height: 1 }, // Shadow offset
    textShadowRadius: 12
  }
})
