import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from "@react-native-material/core";
import { setGas } from "./CalculateScreen";
import Logo from '../components/Logo';

export default function GasType({navigation}) {
  return (
    <View style={styles.container}> 
      <Logo/> 
      <Text style={styles.white_text}>Etanol ou Gasolina</Text>
      <Button title="Etanol"  style={[styles.white_text, styles.button]} onPress={() => {setGas('etanol'); navigation.navigate('Calcular')}}/>
      <Button title="Gasolina" style={[styles.white_text, styles.button]} onPress={() => {setGas('gasoline'); navigation.navigate('Calcular')}}/>
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
