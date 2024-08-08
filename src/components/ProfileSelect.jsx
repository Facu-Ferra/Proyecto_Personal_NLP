/* TODO hacer no requeridas */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { StyleSheet, Text, View, Image } from 'react-native'
import newProfile from '../../assets/images/plus.png'
import {
  COLOR_PROFILE_BACKGROUND,
  COLOR_WHITE,
  COLOR_GRAY_NEW_PROFILE,
  COLOR_GRAY_NEW_PROFILE_TEXT,
  COLOR_PALADIN_CLASS,
  COLOR_BORDER_SELECTED
} from '../../src/commons/constants/colors'

export default function ProfileSelect(props) {
  if (props.text == null && props.photo == null) {
    return (
      <View style={styles.profile}>
        <View style={styles.newProfile}>
          <Image source={newProfile} style={styles.newProfileImage}></Image>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.newProfileText}>New Profile</Text>
        </View>
      </View>
    )
  }

  return (
    <View
      style={[
        styles.profile,
        props.selected === true && styles.selectedCard // Aplica el estilo si la tarjeta está seleccionada
      ]}>
      <Image source={props.photo} style={styles.profilePhoto}></Image>
      <View style={styles.textContainer}>
        <Text style={styles.profileName}>{props.text}</Text>
        <Text style={styles.profileClass}>{props.class}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  profile: {
    width: '80%',
    maxWidth: 400,
    aspectRatio: 3.2 / 1,
    marginBottom: '4%',
    borderRadius: 40,
    backgroundColor: COLOR_PROFILE_BACKGROUND,
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
    alignSelf: 'center' // Centrar horizontalmente el botón
  },
  profilePhoto: {
    borderRadius: 100,
    height: '80%',
    width: '26%',
    marginLeft: 7,
    resizeMode: 'cover',
    overflow: 'hidden'
  },
  profileName: {
    color: COLOR_WHITE,
    fontSize: 30,
    fontFamily: 'InknutAntiqua_300Light',
    flex: 5,
    lineHeight: 68
  },
  profileClass: {
    color: COLOR_PALADIN_CLASS,
    fontSize: 18,
    fontFamily: 'InknutAntiqua_300Light',
    flex: 5,
    lineHeight: 40 // Altura de línea igual al tamaño de fuente
  },
  textContainer: {
    justifyContent: 'flex-start',
    flexDirection: 'column',
    marginLeft: 18
  },
  newProfileImage: {
    height: '80%',
    aspectRatio: 1 / 1,
    opacity: 0.6
  },
  newProfile: {
    backgroundColor: COLOR_GRAY_NEW_PROFILE,
    borderRadius: 100,
    height: '80%',
    width: '26%',
    marginLeft: 7,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center', // Centra el contenido horizontalmente
    overflow: 'hidden'
  },
  newProfileText: {
    color: COLOR_GRAY_NEW_PROFILE_TEXT,
    fontSize: 20,
    fontFamily: 'InknutAntiqua_300Light'
  },
  selectedCard: {
    borderWidth: 2,
    borderColor: COLOR_BORDER_SELECTED
  }
})
