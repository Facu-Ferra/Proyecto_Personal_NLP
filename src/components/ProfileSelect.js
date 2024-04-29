
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import character from '../../assets/characters/paladin.jpg';
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

export default function ProfileSelect(props){

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
            <View style={styles.profile}>
            <Image source={props.photo} style={styles.profilePhoto}></Image>
            <View style={styles.textContainer}>
             <Text style={styles.profileName}>{props.text}</Text>
             <Text style={styles.profileClass}>"hello"</Text>
            </View>
              
            </View>
          </TouchableOpacity>
    );
}

function onPress() { }

const styles = StyleSheet.create({
   
    profile: {
      width: '80%',
      maxWidth: 400,
      height: 100,
      marginBottom: 20,
      borderRadius: 40,
      backgroundColor: 'rgba(39,33,31,0.75)',
      flexDirection: 'row',
      paddingHorizontal: 10,
      alignItems: 'center',
      alignSelf: 'center', // Centrar horizontalmente el botón
    },
    profileName: {
      fontSize: 28,
      textAlign: 'center',
      color: 'white',
      fontFamily: 'InknutAntiqua_300Light',
      borderColor: "red", borderWidth : 2
    },
    profilePhoto: {
        height: 80,
        width: 80,
        resizeMode: 'cover',
        borderRadius: 100,
        overflow: 'hidden',
    },
    profileClass:{
        fontSize: 20,
      color: 'white',
      fontFamily: 'InknutAntiqua_300Light',
    },
    textContainer: {
        flexDirection: 'column'
    }
  });