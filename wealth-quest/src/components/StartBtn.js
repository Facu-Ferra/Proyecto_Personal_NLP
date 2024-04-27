import btn from '../../assets/images/btn1_start.png';
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
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

export default function StartBtn(props){

    let [fontsLoaded] = useFonts({
        InknutAntiqua_300Light,
        InknutAntiqua_400Regular,
        InknutAntiqua_500Medium,
        InknutAntiqua_600SemiBold,
        InknutAntiqua_700Bold,
        InknutAntiqua_800ExtraBold,
        InknutAntiqua_900Black,
      });

    return(
        <TouchableOpacity onPress={onPress}>
            <ImageBackground source={btn} style={styles.button}>
              <Text style={styles.buttonText}>{props.text}</Text>
            </ImageBackground>
          </TouchableOpacity>
    );
}

function onPress() { }

const styles = StyleSheet.create({
   
    button: {
      width: 320,
      marginBottom: 75,
      height: 60,
      borderRadius: 40,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center', // Centrar horizontalmente el botón
      bottom: 10
    },
    buttonText: {
      color: 'white',
      fontSize: 18,
      textAlign: 'center',
      fontFamily: 'InknutAntiqua_600SemiBold',
    },
  });