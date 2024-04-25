import { ImageBackground, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import tabern from './assets/images/tabern.png';
import btn from './assets/images/btn1_start.png';
export default function App() {
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


function onPress(){}

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
    textAlign: 'center'
  },
  button: {
    width: 320,
    marginBottom:75,
    height: 60,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center', // Centrar horizontalmente el botón
    borderWidth: 1, // Grosor del borde
    borderColor: 'black', // Color del borde
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  }
});
