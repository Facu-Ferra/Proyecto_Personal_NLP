/* TODO hacer no requeridas */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { COLOR_WHITE } from '../commons/constants/colors'
import go_to_crew from '../../assets/images/buttons/go_to_crew.png'
import go_to_history from '../../assets/images/buttons/go_to_history.png'
import go_to_stats from '../../assets/images/buttons/go_to_stats.png'
import { router } from 'expo-router'

export default function NavBar(props) {
  return (
    <View style={styles.container}>
      <View style={styles.buttons_container}>
        <TouchableOpacity
          onPress={() => router.push('/inventory?profile_id=' + props.profile)}
          style={styles.touchable}>
          <Text style={styles.label}>Inventory</Text>
          <Image source={go_to_crew} style={styles.button}></Image>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push('/chapters?profile_id=' + props.profile)}
          style={styles.touchable}>
          <Text style={styles.label}>History</Text>
          <Image source={go_to_history} style={styles.button}></Image>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push('/edit-stats?profile_id=' + props.profile)}
          style={styles.touchable}>
          <Text style={styles.label}>Stats</Text>
          <Image source={go_to_stats} style={styles.button}></Image>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    bottom: 0,
    width: '100%',
    position: 'absolute'
  },
  label: {
    color: COLOR_WHITE,
    fontFamily: 'InknutAntiqua_300Light',
    fontSize: 15,
    marginTop: 0
  },
  buttons_container: {
    flexDirection: 'row',
    height: '100%',
    aspectRatio: 4,
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    bottom: 0,
    position: 'relative'
  },
  touchable: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    marginBottom: 15
  },
  button: {
    height: '100%',
    aspectRatio: 1
  }
})
