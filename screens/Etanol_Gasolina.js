import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import { Button } from "@react-native-material/core";
import { setGas } from "./Calcular";

export default function Etanol({navigation}) {
  return (
    <View style={styles.container}> 
      <Image
        style={styles.tinyLogo}
        source={require('../public/images/logo-branca.png')}
      /> 
      <Text style={styles.white_text}>Etanol ou Gasolina</Text>
      <Button title="Etanol"  style={styles.white_text, styles.button} onPress={() => {setGas('etanol'); navigation.navigate('Calcular')}}/>
      <Button title="Gasolina" style={styles.white_text, styles.button} onPress={() => {setGas('gasoline'); navigation.navigate('Calcular')}}/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#2a3540',
      alignItems: 'center',
      justifyContent: 'center',
    },
    white_text: {
      color: 'white',
      marginTop: 20
    },
    button: {
      backgroundColor: '#5e4de0',
      width: 200,
      marginTop: 30,
      
    },
    tinyLogo: {
      width: 180,
      height: 60,
    },
  });
