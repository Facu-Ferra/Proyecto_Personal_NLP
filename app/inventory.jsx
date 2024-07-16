import React from 'react'
import { ImageBackground, StyleSheet, View, ScrollView } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import tabern from '../assets/images/tabern.png'
import AppLoading from 'expo-app-loading'
import Card from '../src/components/Card.jsx'
import {
  useFonts,
  InknutAntiqua_300Light,
  InknutAntiqua_600SemiBold
} from '@expo-google-fonts/inknut-antiqua'
import {
  COLOR_GRAY_DASHBOARD,
  COLOR_BLACK_GOAL_BACKGORUND
} from '../src/commons/constants/colors'

export default function App() {
  let [fontsLoaded] = useFonts({
    InknutAntiqua_300Light,
    InknutAntiqua_600SemiBold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <View style={styles.container}>
        <StatusBar style='light'></StatusBar>
        <ImageBackground source={tabern} style={styles.backImage}>
          <View style={styles.optionsWrapper}></View>
          <View style={styles.cardsWrapper}>
            <ScrollView style={{ flex: 1, width: '100%', height: '95%' }}>
              <View style={styles.scrollView}>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
              </View>
            </ScrollView>
          </View>
        </ImageBackground>
      </View>
    )
  }
}

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
  optionsWrapper: {
    position: 'absolute',
    backgroundColor: COLOR_GRAY_DASHBOARD,
    top: '8%',
    height: '20%',
    width: '90%',
    alignSelf: 'center',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40
  },
  cardsWrapper: {
    alignSelf: 'center',
    width: '90%',
    height: '70%',
    backgroundColor: COLOR_BLACK_GOAL_BACKGORUND,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    position: 'absolute',
    bottom: '2%',
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  scrollView: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
})
