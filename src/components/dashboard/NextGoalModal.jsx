/* eslint-disable react/prop-types */
import { View, Text, Modal, StyleSheet, TextInput, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import {
  COLOR_BLACK_GOAL_BACKGORUND,
  COLOR_GRAY_NEW_PROFILE_TEXT,
  COLOR_WHITE
} from '../../commons/constants/colors'
import { Currency } from '../../components'

const NextGoalModal = ({
  visible,
  currentGoal,
  onClose,
  onAgreeButtonPress
}) => {
  const [value, setValue] = useState(currentGoal)

  useEffect(() => {
    console.log('current value is', currentGoal)
    setValue(currentGoal)
  }, [currentGoal])

  const handleAgreeButtonPress = () => {
    onAgreeButtonPress?.(value)
    onClose?.()
  }

  const handleClose = () => {
    onClose?.()
  }

  const handleChangeText = (goal) => {
    setValue(goal)
  }

  return (
    <Modal
      visible={visible}
      animationType='fade'
      onRequestClose={handleClose}
      transparent>
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <Text style={[styles.label, { color: COLOR_WHITE }]}>
            Ingrese la nueva meta
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <TextInput
              placeholder='Ingrese la nueva meta'
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
          <Button title='Ok' onPress={handleAgreeButtonPress} />
        </View>
      </View>
    </Modal>
  )
}

export default NextGoalModal

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center'
  },
  modal: {
    backgroundColor: COLOR_BLACK_GOAL_BACKGORUND,
    marginHorizontal: 20,
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 15,
    gap: 10
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
    flex: 1
  }
})
