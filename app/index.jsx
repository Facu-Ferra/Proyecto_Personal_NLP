import React, { useState } from 'react'
import {
  ImageBackground,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity
} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import tabern from '../assets/images/tabern.png'
import AppLoading from 'expo-app-loading'
import StartBtn from '../src/components/StartBtn'
import ProfileSelect from '../src/components/ProfileSelect'
import character1 from '../assets/characters/paladin.jpg'
import character2 from '../assets/characters/necromancer.jpg'
import title from '../assets/images/title.png'
import {
  useFonts,
  InknutAntiqua_300Light,
  InknutAntiqua_600SemiBold
} from '@expo-google-fonts/inknut-antiqua'
import { COLOR_WHITE } from '../src/commons/constants/colors'
import { router } from 'expo-router'

export default function App() {
  let [fontsLoaded] = useFonts({
    InknutAntiqua_300Light,
    InknutAntiqua_600SemiBold
  })

  const [selectedCard, setSelectedCard] = useState(0)
  let profiles = [
    { text: 'Benoffi', photo: character1, class: 'Paladin' },
    { text: 'Chaldu', photo: character2, class: 'Necromancer' }
  ]

  const selectCard = (index) => {
    setSelectedCard(index)
  }

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <View style={styles.container}>
        <StatusBar style='light'></StatusBar>
        <ImageBackground source={tabern} style={styles.backImage}>
          <View style={styles.profilesContainer}>
            <Image source={title} style={styles.title}></Image>

            {profiles.map((elemento, index) => (
              <TouchableOpacity onPress={() => selectCard(index)} key={index}>
                <ProfileSelect
                  text={elemento.text}
                  photo={elemento.photo}
                  class={elemento.class}
                  selected={selectedCard === index}></ProfileSelect>
              </TouchableOpacity>
            ))}

            {profiles.length < 3 && (
              <TouchableOpacity onPress={() => newProfile()}>
                <ProfileSelect></ProfileSelect>
              </TouchableOpacity>
            )}
          </View>
          <View>
            <Text style={styles.text}>¿Ready to keep growing?</Text>
            <TouchableOpacity
              onPress={() =>
                router.push('/dashboard?profile_id=' + selectedCard)
              }>
              <StartBtn text='Start' />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    )
  }
}

const newProfile = () => {}

const styles = StyleSheet.create({
  backImage: {
    flex: 1,
    justifyContent: 'space-between',
    resizeMode: 'cover'
  },
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  profilesContainer: {
    marginTop: '33%'
  },
  text: {
    color: COLOR_WHITE,
    fontFamily: 'InknutAntiqua_300Light',
    fontSize: 16,
    marginBottom: 7,
    textAlign: 'center'
  },
  title: {
    alignSelf: 'center',
    height: '13%',
    justifyContent: 'center',
    marginBottom: 5,
    width: '82%'
  }
})
