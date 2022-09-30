import { StyleSheet, Text, View } from 'react-native';
import { Button } from "@react-native-material/core";
import Logo from '../components/Logo';
// import { global_styles } from 'src/styles/global-styles'

export default function HowToUse({navigation}) {
  return (
    <View style={styles.container}> 
      <Logo/> 
      <Text style={styles.white_text_title}>Como Usar</Text>
      <Text style={styles.white_text}>1- Consulte a distância clicando no botão CONSULTAR MAPS para verificar a distância do trajeto que você irá fazer no Google Maps.</Text>
      <Text style={styles.white_text}>2- Preencha os campos com os dados solicitados em cada campo.</Text>
      <Text style={styles.white_text}>3- Escolha o número de viagens ou quantas viagens você irá fazer, exemplo: ida e volta, seriam 2 duas viagens.</Text>
      <Text style={styles.white_text}>4- Clique em calcular para ver o quanto você gastará de combustível nesse trajeto e quanto gastará de dinheiro.</Text>
      <Text style={styles.white_text}>5- E agora com a funcionalidade de poder ver se vale a pena abastecer com Etanol ou Gasolina.</Text>        
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
      textAlign:'center',
      fontSize:16,
      padding:20
    },
    white_text_title: {
      color: 'white',
      textAlign:'center',
      fontSize:25,
      padding:20
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
