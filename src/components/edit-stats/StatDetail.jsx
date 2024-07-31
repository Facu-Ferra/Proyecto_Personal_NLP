/* TODO hacer no requeridas */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native'
const { width, height } = Dimensions.get('window')
import {
  COLOR_WHITE,
  COLOR_BROWN_DASHBOARD,
  COLOR_DARK_BORDER,
  COLOR_LIGHT_BORDER,
  COLOR_BLACK_GOAL_BACKGORUND
} from '../../commons/constants/colors'
import edit from '../../../assets/images/UI/edit.png'

export default function StatDetail(props) {
  return (
    <View style={styles.container}>
      <Image source={props.image} style={styles.image}></Image>

      <View style={styles.textContainer}>
        <Text style={styles.stat}>{props.stat}</Text>
      </View>
      <TouchableOpacity style={{ flex: 1, zIndex: 1 }}>
        <View style={styles.inputContainer}></View>

        <Image source={edit} style={styles.editButton}></Image>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '10%',
    marginVertical: '1%',
    marginHorizontal: '3%',
    flexDirection: 'row',
    backgroundColor: COLOR_BROWN_DASHBOARD,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: COLOR_DARK_BORDER
  },
  stat: {
    color: COLOR_WHITE,
    fontFamily: 'InknutAntiqua_300Light',
    fontSize: 15,
    alignContent: 'center'
  },
  image: {
    position: 'relative',
    width: '16%',
    aspectRatio: 1,
    alignSelf: 'center',
    marginLeft: '1%'
  },
  textContainer: {
    position: 'relative',
    flexDirection: 'row',
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: '2%'
  },
  inputContainer: {
    flex: 1,
    borderRadius: Math.min(width, height) * 0.04,
    margin: 10,
    borderWidth: 1.5,
    borderColor: COLOR_LIGHT_BORDER,
    backgroundColor: COLOR_BLACK_GOAL_BACKGORUND
  },
  editButton: {
    width: '12%',
    height: '40%',
    position: 'absolute',
    alignSelf: 'flex-end',
    right: '1%', // Ajusta la distancia desde el borde derecho
    bottom: '3%', // Ajusta la distancia desde el borde inferior,
    zIndex: 3
  }
})
