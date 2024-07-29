import React, { useState } from 'react'
import {
  ImageBackground,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Text
} from 'react-native'
import { StatusBar } from 'expo-status-bar'
import tabern from '../assets/images/tabern.png'
import { Card, DetailedCardModal } from '../src/components/Inventory'

import { PROFILES } from '../src/commons/constants/helper.js'
import {
  COLOR_GRAY_DASHBOARD,
  COLOR_BLACK_GOAL_BACKGORUND,
  COLOR_DARK_BORDER,
  COLOR_WHITE,
  COLOR_GRAY_NEW_PROFILE_TEXT
} from '../src/commons/constants/colors'
import { useLocalSearchParams } from 'expo-router'

export default function App() {
  const { profile_id } = useLocalSearchParams()
  const [selectedTab, setSelectedTab] = useState(1)
  const [detailedCardModalVisible, setdetailedCardModalVisible] =
    useState(false)
  const changeTab = (option) => {
    setSelectedTab(option)
  }

  const handleCardImagePress = () => {
    setdetailedCardModalVisible(true)
  }

  const handleCloseModal = () => {
    setdetailedCardModalVisible(false)
  }

  const renderCards = () => {
    switch (selectedTab) {
      case 1:
        return PROFILES[profile_id].crew.map((item) => (
          <Card
            key={item.id}
            image={item.image}
            onCardImagePress={handleCardImagePress}
          />
        ))
      case 2:
        return PROFILES[profile_id].items.map((item) => (
          <Card
            key={item.id}
            image={item.image}
            onCardImagePress={handleCardImagePress}
          />
        ))
      default:
        return null
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar style='light'></StatusBar>
      <ImageBackground source={tabern} style={styles.backImage}>
        <View style={styles.optionsWrapper}></View>
        <View style={styles.contentWrapper}>
          <View style={styles.switchTab}>
            <TouchableOpacity
              style={styles.buttonTab}
              onPress={() => changeTab(1)}>
              <Text
                style={[
                  styles.textButton,
                  selectedTab === 1 && styles.selectedTab // Aplica el estilo si la tarjeta está seleccionada
                ]}>
                Crew
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonTab}
              onPress={() => changeTab(2)}>
              <Text
                style={[
                  styles.textButton,
                  selectedTab === 2 && styles.selectedTab // Aplica el estilo si la tarjeta está seleccionada
                ]}>
                Items
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.cardsWrapper}>
            <ScrollView style={{ flex: 1, width: '100%', height: '100%' }}>
              <View style={styles.scrollView}>{renderCards()}</View>
            </ScrollView>
          </View>
        </View>
      </ImageBackground>
      <DetailedCardModal
        visible={detailedCardModalVisible}
        onClose={handleCloseModal}
      />
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
    height: '14%',
    width: '90%',
    alignSelf: 'center',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderWidth: 2,
    borderBottomWidth: 0,
    borderColor: COLOR_DARK_BORDER
  },
  contentWrapper: {
    width: '90%',
    height: '76%',
    alignSelf: 'center',
    backgroundColor: COLOR_BLACK_GOAL_BACKGORUND,
    position: 'absolute',
    bottom: '2%',
    borderWidth: 2,
    borderColor: COLOR_DARK_BORDER
  },
  cardsWrapper: {
    flexDirection: 'row',
    flex: 1
  },
  switchTab: {
    height: '8%',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  buttonTab: {
    width: '45%',
    alignItems: 'center'
  },
  textButton: {
    color: COLOR_GRAY_NEW_PROFILE_TEXT,
    fontFamily: 'InknutAntiqua_300Light',
    fontSize: 16
  },
  scrollView: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  selectedTab: {
    color: COLOR_WHITE
  }
})
