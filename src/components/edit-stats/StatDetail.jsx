/* TODO hacer no requeridas */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native'
const { width, height } = Dimensions.get('window')
import React, { useState } from 'react'
import {
  COLOR_WHITE,
  COLOR_BROWN_DASHBOARD,
  COLOR_DARK_BORDER,
  COLOR_LIGHT_BORDER,
  COLOR_BLACK_GOAL_BACKGORUND
} from '../../commons/constants/colors'
import edit from '../../../assets/images/UI/edit.png'
import { SetStatModal } from '.'

const StatDetail = ({ image, stat, amount, onNewValue }) => {
  const [setStatModalVisible, setSetStatModalVisible] = useState(false)

  const handleStatPress = () => {
    setSetStatModalVisible(true)
  }

  const handleCloseStatModal = () => {
    setSetStatModalVisible(false)
  }

  const handleNewValue = (value) => {
    console.log('\n stat: ' + stat + '\n valor a setear: ' + value)
    onNewValue?.(value)
  }

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image}></Image>

      <View style={styles.textContainer}>
        <Text style={styles.stat}>{stat}</Text>
      </View>
      <TouchableOpacity
        style={{ flex: 1, zIndex: 1 }}
        onPress={handleStatPress}>
        <View style={styles.inputContainer}>
          <Text style={styles.amount}>${amount}</Text>
        </View>

        <Image source={edit} style={styles.editButton}></Image>
      </TouchableOpacity>
      <SetStatModal
        visible={setStatModalVisible}
        onAgreeButtonPress={handleNewValue}
        currentAmount={amount}
        // levelImage={level}
        onClose={handleCloseStatModal}></SetStatModal>
    </View>
  )
}

export default StatDetail

const styles = StyleSheet.create({
  container: {
    height: '10%',
    marginVertical: '1%',
    marginHorizontal: '3%',
    flexDirection: 'row',
    backgroundColor: COLOR_BROWN_DASHBOARD,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: COLOR_DARK_BORDER
  },
  stat: {
    color: COLOR_WHITE,
    fontFamily: 'InknutAntiqua_300Light',
    fontSize: 15,
    alignContent: 'center'
  },
  image: {
    position: 'relative',
    width: '16%',
    aspectRatio: 1,
    alignSelf: 'center',
    marginLeft: '1%'
  },
  textContainer: {
    position: 'relative',
    flexDirection: 'row',
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: '2%'
  },
  inputContainer: {
    flex: 1,
    borderRadius: Math.min(width, height) * 0.04,
    margin: 10,
    borderWidth: 1.5,
    borderColor: COLOR_LIGHT_BORDER,
    backgroundColor: COLOR_BLACK_GOAL_BACKGORUND,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  editButton: {
    width: '10%',
    height: '31%',
    position: 'absolute',
    alignSelf: 'flex-end',
    right: '1%', // Ajusta la distancia desde el borde derecho
    bottom: '13%', // Ajusta la distancia desde el borde inferior,
    zIndex: 3
  },
  amount: {
    color: COLOR_WHITE,
    fontFamily: 'InknutAntiqua_300Light',

    marginRight: '7%',
    fontSize: 16
  }
})
