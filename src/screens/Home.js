import { StatusBar } from 'expo-status-bar';
import Logo from '../components/Logo'
import { StyleSheet, Text, View } from 'react-native';
import { Button } from "@react-native-material/core";

export default function Home({navigation}) {
  return (
    <View style={styles.container}> 
      <Logo style={{flex: 1, alignItems: 'top'}}/>
      <Text style={styles.white_text}>Quanto irei gastar de combustível</Text>
      <Button title="Calcular" style={[styles.white_text, styles.button]} onPress={() => navigation.navigate('Calcular')}/>
      <Button title="Combustivel" style={[styles.white_text, styles.button]} onPress={() => navigation.navigate('Combustivel')}/>
      <Button title="Como Usar" style={[styles.white_text, styles.button]} onPress={() => navigation.navigate('Como Usar')}/>
      <StatusBar style="auto" />
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
