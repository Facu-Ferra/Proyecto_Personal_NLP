import { ImageBackground, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import tabern from './assets/images/tabern.png';
import btn from './assets/images/btn1_start.png';
import AppLoading from 'expo-app-loading';
import StartBtn from './src/components/StartBtn';
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

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <ImageBackground source={tabern} style={styles.backImage}>
          <Text style={styles.text}>¿Ready to keep growing?</Text>
          <StartBtn text="Start" />
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
    justifyContent: 'flex-end'
  },
  text: {
    color: 'white',
    fontSize: 18,
    marginBottom: 5,
    textAlign: 'center',
    fontFamily: 'InknutAntiqua_300Light',
  },
});

