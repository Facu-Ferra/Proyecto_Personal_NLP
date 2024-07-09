/* TODO hacer no requeridas */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { StyleSheet, Text, View, Image } from 'react-native'
import { COLOR_WHITE } from '../commons/constants/colors'

export default function Stat(props) {
  return (
    <View style={styles.container}>
      <Image source={props.image} style={styles.image}></Image>

      <View style={styles.textContainer}>
        <Text style={styles.stat}>{props.stat}</Text>
        <Text style={styles.amount}>{props.amount}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  stat: {
    color: COLOR_WHITE,
    fontFamily: 'InknutAntiqua_300Light',
    fontSize: 15,
    marginTop: 0,
    position: 'absolute'
  },
  amount: {
    color: COLOR_WHITE,
    fontFamily: 'InknutAntiqua_300Light',
    fontSize: 15,
    position: 'absolute',
    marginTop: 16,
    marginLeft: 2
  },
  image: {
    position: 'relative',
    width: 50,
    height: 50,
    alignSelf: 'center'
  },
  textContainer: {
    position: 'relative'
  }
})
