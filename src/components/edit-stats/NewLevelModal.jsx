/* eslint-disable react/prop-types */
import {
  View,
  Text,
  Modal,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity
} from 'react-native'
import React from 'react'
import {
  COLOR_WHITE,
  COLOR_DARK_BORDER,
  COLOR_DARK_GRAY_60,
  COLOR_DARK_GRAY_70,
  COLOR_GOLD
} from '../../commons/constants/colors'
import StartBtn from '../../components/StartBtn'

const NewLevelModal = ({ visible, image, onClose, onAgreeButtonPress }) => {
  const handleAgreeButtonPress = () => {
    onAgreeButtonPress?.()
    onClose?.()
  }

  const handleClose = () => {
    onClose?.()
  }

  return (
    <Modal
      visible={visible}
      animationType='fade'
      onRequestClose={handleClose}
      transparent>
      <StatusBar
        backgroundColor={COLOR_DARK_GRAY_60}
        barStyle='light-content'
      />
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <Text style={styles.label}>¡New Level Reached!</Text>
          <Image source={image} style={styles.image}></Image>
          <Text style={styles.textSecondary}>Level 4: Adeventurer</Text>
          <TouchableOpacity
            onPress={handleAgreeButtonPress}
            style={{ height: 'auto' }}>
            <StartBtn text='Continue Story'></StartBtn>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

export default NewLevelModal

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR_DARK_GRAY_60
  },
  modal: {
    backgroundColor: COLOR_DARK_GRAY_70,
    alignItems: 'center',
    marginHorizontal: 40,
    borderRadius: 40,
    paddingHorizontal: 15,
    gap: 5,
    borderWidth: 1.5,
    borderColor: COLOR_DARK_BORDER,
    paddingTop: '2.5%',
    height: '53%'
  },
  label: {
    fontFamily: 'InknutAntiqua_600SemiBold',
    fontSize: 20,
    color: COLOR_WHITE,
    textShadowColor: COLOR_GOLD, // Glow color
    textShadowOffset: { width: 0, height: 1 }, // Shadow offset
    textShadowRadius: 18
  },
  textSecondary: {
    fontSize: 18,
    marginBottom: 10,
    fontFamily: 'InknutAntiqua_300Light',
    color: COLOR_WHITE
  },
  image: {
    height: '50%',
    borderWidth: 1.5,
    borderColor: COLOR_DARK_BORDER,
    borderRadius: 40,
    aspectRatio: 1 / 1
  }
})
