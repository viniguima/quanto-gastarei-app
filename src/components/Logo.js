import { View, Image, StyleSheet } from 'react-native';

export default function Logo() {
    return (
        <View>
            <Image
                style={styles.tinyLogo}
                source={require('../../public/images/logo-branca.png')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    tinyLogo: {
        width: 280,
        height: 120,
        marginTop:20,
        alignContent:'center'
    },
});