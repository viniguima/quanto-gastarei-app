import { StyleSheet, Text, View } from 'react-native';
import { Button } from "@react-native-material/core";
import Logo from '../components/Logo';
// import { global_styles } from 'src/styles/global-styles'

export default function HowToUse() {
  return (
    <View style={styles.container}> 
      <Logo/> 
      <Text style={styles.white_text}>Como Usar</Text>
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
