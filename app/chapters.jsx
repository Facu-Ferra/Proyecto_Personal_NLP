/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React from 'react'
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  ScrollView
} from 'react-native'
import { Chapter } from '../src/components/chapters'
import { StatusBar } from 'expo-status-bar'
import tabern from '../assets/images/backgrounds/library.png'

import {
  COLOR_BLACK_GOAL_BACKGORUND,
  COLOR_DARK_BORDER,
  COLOR_WHITE
} from '../src/commons/constants/colors'

export default function App() {
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
            Chapters
          </Text>

          <ScrollView
            style={{ flex: 1, width: '100%', marginTop: '10%' }}
            contentContainerStyle={{ alignItems: 'center' }}>
            <View style={styles.chaptersWrapper}>
              <Chapter title='1 - Introduccion'></Chapter>
              <Chapter title='2 - Awaken'></Chapter>
              <Chapter title='3 - Warriors'></Chapter>
              <Chapter title='4 - KDA'></Chapter>
              <Chapter title='3 - Return' lock={true}></Chapter>
              <Chapter title='3 - Return' lock={true}></Chapter>
              <Chapter title='3 - Return' lock={true}></Chapter>
              <Chapter title='3 - Return' lock={true}></Chapter>
              <Chapter title='3 - Return' lock={true}></Chapter>
              <Chapter title='3 - Return' lock={true}></Chapter>
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
    resizeMode: 'cover'
  },
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  contentWrapper: {
    marginTop: '20%',
    alignSelf: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    marginBottom: '10%',
    backgroundColor: COLOR_BLACK_GOAL_BACKGORUND,
    borderWidth: 2,
    borderColor: COLOR_DARK_BORDER,
    borderRadius: 30
  },
  chaptersWrapper: {
    width: '85%',
    flexWrap: 'wrap',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: '10%'
  }
})
