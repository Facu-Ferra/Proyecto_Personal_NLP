import React, { useState } from 'react'
import {
  ImageBackground,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  Image
} from 'react-native'
import { StatusBar } from 'expo-status-bar'
import tabern from '../assets/images/backgrounds/tabern.png'
import { Card, DetailedCardModal } from '../src/components/Inventory'

import { PROFILES } from '../src/commons/constants/helper.js'
import {
  COLOR_BLACK_GOAL_BACKGORUND,
  COLOR_DARK_BORDER,
  COLOR_WHITE,
  COLOR_GRAY_NEW_PROFILE_TEXT,
  COLOR_GRAY_DASHBOARD_60
} from '../src/commons/constants/colors'
import { useLocalSearchParams } from 'expo-router'
import rare from '../assets/images/UI/rareInventory.png'
import items from '../assets/images/UI/items.png'
import crew from '../assets/images/UI/crew.png'

export default function App() {
  const { profile_id } = useLocalSearchParams()
  const [selectedTab, setSelectedTab] = useState(1)
  const [detailedCardModalVisible, setdetailedCardModalVisible] =
    useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedRare, setSelectedRare] = useState(null)
  const changeTab = (option) => {
    setSelectedTab(option)
  }

  const handleCardImagePress = (image, rare) => {
    setSelectedImage(image)
    setSelectedRare(rare)
    setdetailedCardModalVisible(true)
  }

  const handleCloseModal = () => {
    setdetailedCardModalVisible(false)
  }

  const sumRare = (crew) => {
    return crew.reduce((total, member) => total + member.rare, 0)
  }

  const countItems = (items) => {
    return items.length
  }

  const renderCards = () => {
    switch (selectedTab) {
      case 1:
        return PROFILES[profile_id].crew.map((item) => (
          <Card
            key={item.id}
            image={item.image}
            onCardImagePress={() => handleCardImagePress(item.image, item.rare)}
          />
        ))
      case 2:
        return PROFILES[profile_id].items.map((item) => (
          <Card
            key={item.id}
            image={item.image}
            onCardImagePress={() => handleCardImagePress(item.image, item.rare)}
          />
        ))
      default:
        return null
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar style='light'></StatusBar>
      <ImageBackground source={tabern} style={styles.backImage} blurRadius={1}>
        <View style={styles.optionsWrapper}>
          <Image
            source={rare}
            style={{ width: '13%', aspectRatio: 1 / 1.5 }}></Image>
          <Text style={styles.text}>{sumRare(PROFILES[profile_id].crew)} </Text>
          <Image
            source={items}
            style={{ width: '20%', aspectRatio: 1 / 1 }}></Image>
          <Text style={styles.text}>
            {countItems(PROFILES[profile_id].items)}{' '}
          </Text>
          <Image
            source={crew}
            style={{ width: '19%', aspectRatio: 1 / 1.2 }}></Image>
          <Text style={styles.text}>
            {countItems(PROFILES[profile_id].crew)}{' '}
          </Text>
        </View>
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
        image={selectedImage}
        rare={selectedRare}
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
    backgroundColor: COLOR_GRAY_DASHBOARD_60,
    top: '8%',
    height: '14%',
    width: '90%',
    alignSelf: 'center',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '10%',
    paddingLeft: '12%',
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
  },
  text: {
    color: COLOR_WHITE,
    fontFamily: 'InknutAntiqua_300Light',
    fontSize: 22,
    marginHorizontal: 2
  }
})
