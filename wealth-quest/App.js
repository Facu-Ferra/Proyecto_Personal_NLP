import { ImageBackground, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import tabern from './assets/images/tabern.png';
import character from './assets/characters/paladin.jpg';
import btn from './assets/images/btn1_start.png';
import AppLoading from 'expo-app-loading';
import StartBtn from './src/components/StartBtn';
import ProfileSelect from './src/components/ProfileSelect';
import {
  useFonts,
  InknutAntiqua_300Light,
  InknutAntiqua_600SemiBold
} from '@expo-google-fonts/inknut-antiqua';

export default function App() {
  let [fontsLoaded] = useFonts({
    InknutAntiqua_300Light,
    InknutAntiqua_600SemiBold
  });

  let profiles = ['Benoffi', 'Elemento 2'];

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <ImageBackground source={tabern} style={styles.backImage}>
        <View></View>
        <View style={{borderColor: "red", borderWidth : 2}}>
        <Text style={styles.title}>Wealth Quest</Text>
      
        {profiles.map((elemento, index) => (
             <ProfileSelect text = {elemento} photo = {character}></ProfileSelect>
      ))}

        </View>
            <View>
              <Text style={styles.text}>¿Ready to keep growing?</Text>
              <StartBtn text="Start" />
            </View>
        </ImageBackground>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  backImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'space-between', // Distribuye los elementos verticalmente
  },
  text: {
    color: 'white',
    fontSize: 16,
    marginBottom: 7,
    textAlign: 'center',
    fontFamily: 'InknutAntiqua_300Light',
  },
  title: {
    color: 'white',
    fontSize: 40,
    marginBottom: 5,
    textAlign: 'center',
    fontFamily: 'InknutAntiqua_300Light',
    textShadowColor : '#585858',
    textShadowOffset : {width: 5, height: 5},
    textShadowRadius:5,
  },
});

