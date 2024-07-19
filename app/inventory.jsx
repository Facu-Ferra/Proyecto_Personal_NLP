import React from 'react'
import { ImageBackground, StyleSheet, View, ScrollView } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import tabern from '../assets/images/tabern.png'
import Card from '../src/components/Card.jsx'
import { PROFILES } from '../src/commons/constants/helper.js'
import {
  COLOR_GRAY_DASHBOARD,
  COLOR_BLACK_GOAL_BACKGORUND,
  COLOR_DARK_BORDER
} from '../src/commons/constants/colors'
import { useLocalSearchParams } from 'expo-router'

export default function App() {
  const { profile_id } = useLocalSearchParams()

  return (
    <View style={styles.container}>
      <StatusBar style='light'></StatusBar>
      <ImageBackground source={tabern} style={styles.backImage}>
        <View style={styles.optionsWrapper}></View>
        <View style={styles.cardsWrapper}>
          <ScrollView style={{ flex: 1, width: '100%', height: '95%' }}>
            <View style={styles.scrollView}>
              {PROFILES[profile_id].crew.map(
                (
                  item //Por cada personaje que tenga el usuario renderiza una card
                ) => (
                  <Card key={item.id} image={item.image} />
                )
              )}
            </View>
          </ScrollView>
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
    borderTopRightRadius: 40,
    borderWidth: 2,
    borderBottomWidth: 0,
    borderColor: COLOR_DARK_BORDER
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
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: COLOR_DARK_BORDER
  },
  scrollView: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
})
