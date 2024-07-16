/* TODO hacer no requeridas */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { StyleSheet, View, Image } from 'react-native'
import character1 from '../../assets/characters/paladin.jpg'

export default function ProfileSelect() {
  return (
    <View style={styles.card}>
      <Image source={character1} style={styles.image}></Image>
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
    alignSelf: 'center'
  },
  image: {
    flex: 1,
    width: '100%',
    borderRadius: 20
  }
})
