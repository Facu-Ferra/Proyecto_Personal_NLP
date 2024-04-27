/* TODO hacer no requeridas */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native'
// import {
//   useFonts,
//   InknutAntiqua_300Light,
//   InknutAntiqua_400Regular,
//   InknutAntiqua_500Medium,
//   InknutAntiqua_600SemiBold,
//   InknutAntiqua_700Bold,
//   InknutAntiqua_800ExtraBold,
//   InknutAntiqua_900Black
// } from '@expo-google-fonts/inknut-antiqua'
import btn from '../../assets/images/btn1_start.png'
import { COLOR_WHITE } from '../commons/constants/colors'

export default function StartBtn(props) {
  // let [fontsLoaded] = useFonts({
  //   InknutAntiqua_300Light,
  //   InknutAntiqua_400Regular,
  //   InknutAntiqua_500Medium,
  //   InknutAntiqua_600SemiBold,
  //   InknutAntiqua_700Bold,
  //   InknutAntiqua_800ExtraBold,
  //   InknutAntiqua_900Black
  // })

  return (
    <TouchableOpacity onPress={onPress}>
      <ImageBackground source={btn} style={styles.button}>
        <Text style={styles.buttonText}>{props.text}</Text>
      </ImageBackground>
    </TouchableOpacity>
  )
}

function onPress() {}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    alignSelf: 'center', // Centrar horizontalmente el botón
    borderRadius: 40,
    height: 60,
    justifyContent: 'center',
    marginBottom: 75,
    width: 320
  },
  buttonText: {
    color: COLOR_WHITE,
    fontFamily: 'InknutAntiqua_600SemiBold',
    fontSize: 18,
    textAlign: 'center'
  }
})
