import { ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import tabern from './assets/images/tabern.png';
export default function App() {
  return (
    <View style={styles.container}>
       <ImageBackground source={tabern} style={styles.backImage}>
          <Text style={styles.text}>¿Ready to keep growing?</Text>
          <TouchableOpacity onPress={onPress}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Start</Text>
              </View>
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
    fontWeight: 'bold',
    textAlign: 'center'
  },
  button: {
    width: '70%',
    maxWidth: 400,
    marginBottom:85,
    height: 60,
    borderRadius: 40,
    backgroundColor: '#97111D',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center', // Centrar horizontalmente el botón
    borderWidth: 2, // Grosor del borde
    borderColor: 'black', // Color del borde
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  }
});
