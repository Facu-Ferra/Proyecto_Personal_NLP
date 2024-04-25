import { ImageBackground, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import tabern from './assets/images/tabern.png';
import btn from './assets/images/btn1_start.png';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  InknutAntiqua_300Light,
  InknutAntiqua_400Regular,
  InknutAntiqua_500Medium,
  InknutAntiqua_600SemiBold,
  InknutAntiqua_700Bold,
  InknutAntiqua_800ExtraBold,
  InknutAntiqua_900Black,
} from '@expo-google-fonts/inknut-antiqua';
export default function App() {
  let [fontsLoaded] = useFonts({
    InknutAntiqua_300Light,
    InknutAntiqua_400Regular,
    InknutAntiqua_500Medium,
    InknutAntiqua_600SemiBold,
    InknutAntiqua_700Bold,
    InknutAntiqua_800ExtraBold,
    InknutAntiqua_900Black,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <ImageBackground source={tabern} style={styles.backImage}>
          <Text style={styles.text}>¿Ready to keep growing?</Text>
          <TouchableOpacity onPress={onPress}>
            <ImageBackground source={btn} style={styles.button}>
              <Text style={styles.buttonText}>Start</Text>
            </ImageBackground>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}


function onPress() { }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  backImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end'
  },
  text: {
    color: 'white',
    fontSize: 18,
    marginBottom: 5,
    textAlign: 'center',
    fontFamily: 'InknutAntiqua_300Light',
  },
  button: {
    width: 320,
    marginBottom: 75,
    height: 60,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center', // Centrar horizontalmente el botón
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'InknutAntiqua_600SemiBold',
  },
});

