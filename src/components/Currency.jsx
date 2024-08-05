/* eslint-disable react/prop-types */
import React from 'react'
import { View, Text } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { COLOR_PALADIN } from '../commons/constants/colors'

const Currency = ({ text, icon }) => {
  if (text) {
    return (
      <View
        style={{
          backgroundColor: COLOR_PALADIN,
          padding: 8,
          justifyContent: 'center',
          borderTopRightRadius: 10,
          borderBottomRightRadius: 10
        }}>
        <Text>{text}</Text>
      </View>
    )
  }

  return (
    <View style={{ backgroundColor: COLOR_PALADIN, padding: 8 }}>
      <MaterialCommunityIcons name={icon} size={20} />
    </View>
  )
}

export default Currency
