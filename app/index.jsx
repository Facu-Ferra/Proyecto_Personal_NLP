import React, { useState } from 'react'
import {
  ImageBackground,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  ScrollView
} from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { router } from 'expo-router'
import tabern from '../assets/images/backgrounds/tabern.png'
import title from '../assets/images/title.png'
import { PROFILES } from '../src/commons/constants/helper.js'
import {
  COLOR_GRAY_DASHBOARD,
  COLOR_WHITE
} from '../src/commons/constants/colors'
import StartBtn from '../src/components/StartBtn'
import ProfileSelect from '../src/components/ProfileSelect'

const Divider = () => {
  return <View style={styles.divider} />
}

export default function App() {
  const [selectedCard, setSelectedCard] = useState(0)

  const handleStartPress = () => {
    router.push('/dashboard?profile_id=' + selectedCard)
  }

  const renderProfileItem = (elemento, index) => {
    const handleItemPress = (index) => {
      setSelectedCard(index)
    }
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => handleItemPress(index)}
        key={index}>
        <ProfileSelect
          text={elemento.text}
          photo={elemento.photo}
          class={elemento.class}
          selected={selectedCard === index}
        />
      </TouchableOpacity>
    )
  }

  const renderAddProfileItem = () => {
    if (PROFILES.length >= 3) return
    return (
      <TouchableOpacity onPress={() => newProfile()}>
        <ProfileSelect />
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      <StatusBar style='light' />
      <ImageBackground source={tabern} style={styles.backImage} blurRadius={1}>
        <View style={styles.profilesContainer}>
          <Image source={title} style={styles.title} />
          <ScrollView>
            {PROFILES.map(renderProfileItem)}
            {renderAddProfileItem()}
          </ScrollView>
        </View>
        <View style={styles.footer}>
          <Divider />
          <Text style={styles.text}>¿Ready to keep growing?</Text>
          <TouchableOpacity onPress={handleStartPress}>
            <StartBtn text='Start' />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  )
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
  divider: {
    alignSelf: 'center',
    height: 2,
    backgroundColor: COLOR_GRAY_DASHBOARD,
    width: '85%'
  },
  footer: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: '80%'
  },
  item: {
    flex: 1
  },
  profilesContainer: {
    marginTop: '33%',
    flex: 0.7
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
    height: '12%',
    aspectRatio: 6 / 1,
    justifyContent: 'center',
    marginBottom: 5
  }
})
