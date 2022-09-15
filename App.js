import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button } from "@react-native-material/core";
// import { global_styles } from 'src/styles/global-styles'

export default function App() {
  return (
    <View style={styles.container}> 
      <Image
        style={styles.tinyLogo}
        source={require('public/images/logo-branca.png')}
      /> 
      <Text style={styles.white_text}>Clique se concorda</Text>
      <Button title="Bosta" style={styles.white_text}/>
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
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});
