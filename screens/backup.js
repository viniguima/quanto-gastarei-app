import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import { Button } from "@react-native-material/core";
// import { global_styles } from 'src/styles/global-styles'

export default function App() {
  return (
    <View style={styles.container}> 
      <Image
        style={styles.tinyLogo}
        source={require('./public/images/logo-branca.png')}
      /> 
      <Text style={styles.white_text}>Quanto irei gastar de combustível</Text>
      <Button title="Calcular" style={styles.white_text, styles.button} onPress={() => Alert.alert("Vai se foder")}/>
      <Button title="Etanol/Gasolina" style={styles.white_text, styles.button}/>
      <Button title="Como Usar" style={styles.white_text, styles.button}/>
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
