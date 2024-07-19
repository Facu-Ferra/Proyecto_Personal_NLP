/* TODO hacer no requeridas */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { StyleSheet, View, Text, ImageBackground } from 'react-native'
import {
  COLOR_PROFILE_BACKGROUND,
  COLOR_WHITE,
  COLOR_LIGHT_BORDER
} from '../commons/constants/colors'

export default function ProfileSelect(props) {
  return (
    <View style={styles.card}>
      <ImageBackground
        source={props.image}
        style={styles.image}
        imageStyle={{ borderRadius: 20 }}></ImageBackground>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Name</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    width: '40%',
    height: 200,
    marginBottom: 20,
    borderRadius: 20,
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: COLOR_LIGHT_BORDER
  },
  image: {
    flex: 1,
    width: '100%'
  },
  textContainer: {
    position: 'absolute',
    bottom: 0,
    marginBottom: 0,
    width: '100%',
    height: 40,
    backgroundColor: COLOR_PROFILE_BACKGROUND,
    alignContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: COLOR_LIGHT_BORDER,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  text: {
    color: COLOR_WHITE,
    fontFamily: 'InknutAntiqua_300Light',
    fontSize: 14
  }
})
