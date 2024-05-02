import React, { useState } from 'react'
import {
  ImageBackground,
  StyleSheet,
  Text,
  Image,
  View,
  StatusBar,
  TouchableOpacity
} from 'react-native'
import { Link } from 'expo-router'
import tabern from '../assets/images/tabern.png'
import btn from '../assets/images/btn1_start.png'
import title from '../assets/images/title.png'
import { COLOR_WHITE, PROFILES_LIST } from '../src/commons'
// import StartBtn from '../src/components/StartBtn' // TODO revisar por que no funciona el Link con este componente
import ProfileSelect from '../src/components/ProfileSelect'

export default function App() {
  const [selectedCard, setSelectedCard] = useState(0)

  const profiles = PROFILES_LIST

  const renderProfiles = (elemento, index) => {
    const handleSelectCard = () => {
      setSelectedCard(index)
    }

    return (
      <TouchableOpacity onPress={handleSelectCard} key={index}>
        <ProfileSelect
          text={elemento.text}
          photo={elemento.photo}
          class={elemento.class}
          selected={selectedCard === index}></ProfileSelect>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      <StatusBar />
      <ImageBackground source={tabern} style={styles.backImage}>
        <View style={styles.profilesContainer}>
          <Image source={title} style={styles.title}></Image>

          {/* TODO: pasar map() a Flatlist 
            https://reactnative.dev/docs/flatlist
          */}

          {profiles.map(renderProfiles)}

          {profiles.length < 3 && (
            <Link href='/new-profile' asChild>
              <TouchableOpacity>
                <ProfileSelect />
              </TouchableOpacity>
            </Link>
          )}
        </View>
        <View>
          <Text style={styles.text}>¿Ready to keep growing?</Text>
          <Link href='/profile' asChild>
            <TouchableOpacity>
              <ImageBackground source={btn} style={styles.button}>
                <Text style={styles.buttonText}>{'Start'}</Text>
              </ImageBackground>
            </TouchableOpacity>
          </Link>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  backImage: {
    flex: 1,
    justifyContent: 'space-between',
    resizeMode: 'cover'
  },
  button: {
    alignItems: 'center',
    alignSelf: 'center', // Centrar horizontalmente el botón
    borderRadius: 40,
    height: 60,
    justifyContent: 'center',
    marginBottom: 75,
    width: 320
  },
  buttonText: {
    color: COLOR_WHITE,
    fontFamily: 'InknutAntiqua_600SemiBold',
    fontSize: 18,
    textAlign: 'center'
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
