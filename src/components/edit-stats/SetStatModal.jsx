/* eslint-disable react/prop-types */
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar
} from 'react-native'
import React, { useEffect, useState } from 'react'
import {
  COLOR_GRAY_NEW_PROFILE_TEXT,
  COLOR_WHITE,
  COLOR_LIGHT_BORDER,
  COLOR_GREEN_BTN,
  COLOR_DARK_GRAY_60,
  COLOR_DARK_GRAY_70
} from '../../commons/constants/colors'
import { Currency } from '../../components'

const SetStatModal = ({
  visible,
  currentAmount,
  onClose,
  onAgreeButtonPress
}) => {
  const [value, setValue] = useState(currentAmount)

  useEffect(() => {
    console.log('current value is', currentAmount)
    setValue(currentAmount)
  }, [currentAmount])

  const handleAgreeButtonPress = () => {
    onAgreeButtonPress?.(value)
    onClose?.()
  }

  const handleClose = () => {
    onClose?.()
  }

  const handleChangeText = (newAmount) => {
    setValue(newAmount)
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
          <Text style={[styles.label, { color: COLOR_WHITE }]}>
            Ingrese el nuevo valor
          </Text>
          <View style={{ flexDirection: 'row', borderRadius: 10 }}>
            <TextInput
              placeholder='Let´s go!'
              value={value}
              autoFocus
              onChangeText={handleChangeText}
              style={styles.input}
              keyboardType='numeric'
            />
            <Currency text={'ARS'} />
          </View>
          <Text
            style={[
              styles.textSecondary,
              { color: COLOR_GRAY_NEW_PROFILE_TEXT }
            ]}>
            Si desea cambiar la moneda hagalo desde la configuracion
          </Text>
          <TouchableOpacity
            onPress={handleAgreeButtonPress}
            style={{ height: 'auto' }}>
            <View style={styles.mainBtn}>
              <Text style={styles.btnText}>Save Change</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

export default SetStatModal

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: COLOR_DARK_GRAY_60
  },
  modal: {
    backgroundColor: COLOR_DARK_GRAY_70,
    marginHorizontal: 20,
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 15,
    gap: 10,
    borderWidth: 1.5,
    borderColor: COLOR_LIGHT_BORDER
  },
  label: {
    fontFamily: 'InknutAntiqua_600SemiBold',
    fontSize: 18
  },
  textSecondary: {
    fontSize: 13,
    marginBottom: 10
  },
  input: {
    backgroundColor: COLOR_WHITE,
    padding: 12,
    flex: 1,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10
  },
  mainBtn: {
    alignItems: 'center',
    alignSelf: 'center', // Centrar horizontalmente el botón
    borderRadius: 40,
    justifyContent: 'center',
    width: '80%',
    aspectRatio: 6 / 1.25,
    marginLeft: '4%',
    backgroundColor: COLOR_GREEN_BTN,
    borderWidth: 2,
    borderColor: COLOR_LIGHT_BORDER
  },
  btnText: {
    color: COLOR_WHITE,
    fontFamily: 'InknutAntiqua_600SemiBold',
    fontSize: 18,
    textAlign: 'center'
  }
})
