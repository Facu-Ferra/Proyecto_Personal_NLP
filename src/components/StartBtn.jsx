/* TODO hacer no requeridas */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { ImageBackground, StyleSheet, Text } from 'react-native'
import btn from '../../assets/images/btn1_start.png'
import { COLOR_WHITE } from '../commons/constants/colors'

export default function StartBtn(props) {
  return (
    <ImageBackground source={btn} style={styles.button}>
      <Text style={styles.buttonText}>{props.text}</Text>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    alignSelf: 'center', // Centrar horizontalmente el botón
    borderRadius: 40,
    justifyContent: 'center',
    width: '95%',
    aspectRatio: 7 / 1.25,
    marginLeft: '4%'
  },
  buttonText: {
    color: COLOR_WHITE,
    fontFamily: 'InknutAntiqua_600SemiBold',
    fontSize: 18,
    textAlign: 'center'
  }
})
