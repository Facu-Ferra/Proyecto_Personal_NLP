/* TODO hacer no requeridas */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { StyleSheet, View, Image } from 'react-native'
import rare from '../../../assets/images/UI/rare.png'
import notRare from '../../../assets/images/UI/notRare.png'

const Calification = ({ rarity }) => {
  const number = Number(rarity)

  let images = []

  for (let i = 0; i < number; i++) {
    images.push(<Image source={rare} style={styles.image} />)
  }
  for (let i = 0; i < 5 - number; i++) {
    images.push(<Image source={notRare} style={styles.image} />)
  }

  return <View style={styles.container}>{images}</View>
}

export default Calification

const styles = StyleSheet.create({
  image: {
    flex: 1,
    height: '100%',
    aspectRatio: 1 / 1.5,
    marginHorizontal: 5
  },
  container: {
    marginTop: '5%',
    height: 40,
    width: '75%',
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'start',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
