/* eslint-disable react/prop-types */
import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import {
  COLOR_WHITE,
  COLOR_LIGHT_BORDER,
  COLOR_GRAY_DASHBOARD
} from '../../commons/constants/colors'

export default function TotalAmount({ value }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Total:</Text>
      <Text style={styles.amount}> ${value} </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: '90%',
    backgroundColor: COLOR_GRAY_DASHBOARD,
    flex: 1,
    marginTop: '5%',
    borderWidth: 1,
    borderColor: COLOR_LIGHT_BORDER,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  label: {
    color: COLOR_WHITE,
    fontFamily: 'InknutAntiqua_300Light',
    marginLeft: '7%',
    fontSize: 20
  },
  amount: {
    color: COLOR_WHITE,
    fontFamily: 'InknutAntiqua_300Light',
    alignContent: 'center',
    marginRight: '3%',
    fontSize: 18
  }
})
