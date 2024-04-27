/* eslint-disable react/react-in-jsx-scope */
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import tabern from './assets/images/tabern.png'
import AppLoading from 'expo-app-loading'
import StartBtn from './src/components/StartBtn'
import {
  useFonts,
  InknutAntiqua_300Light,
  InknutAntiqua_600SemiBold
} from '@expo-google-fonts/inknut-antiqua'
import { COLOR_WHITE } from './src/commons/constants/colors'

export default function App() {
  let [fontsLoaded] = useFonts({
    InknutAntiqua_300Light,
    InknutAntiqua_600SemiBold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <View style={styles.container}>
        <ImageBackground source={tabern} style={styles.backImage}>
          <Text style={styles.text}>¿Ready to keep growing?</Text>
          <StartBtn text='Start' />
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  backImage: {
    flex: 1,
    justifyContent: 'flex-end',
    resizeMode: 'cover'
  },
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  text: {
    color: COLOR_WHITE,
    fontFamily: 'InknutAntiqua_300Light',
    fontSize: 18,
    marginBottom: 5,
    textAlign: 'center'
  }
})
