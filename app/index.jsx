/* eslint-disable react/react-in-jsx-scope */
import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import tabern from '../assets/images/tabern.png'
import { COLOR_WHITE } from '../src/commons/constants/colors'
import StartBtn from '../src/components/StartBtn'

const Root = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={tabern} style={styles.backImage}>
        <Text style={styles.text}>¿Ready to keep growing?</Text>
        <StartBtn text='Start' />
      </ImageBackground>
    </View>
  )
}

export default Root

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
