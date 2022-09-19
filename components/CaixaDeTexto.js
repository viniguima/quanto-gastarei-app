import React, { useState} from "react";
import { View, TextInput, Text } from "react-native";
import { setDistance } from "../screens/Calcular";


export default function TextBox(){ 
    const [distance, onChangeNumber] = React.useState(null)
    return(
        <View>
            <Text style={{color:"#fff", fontSize:20}}>Insira a distância do trageto em Km</Text>
            <TextInput
                style={{borderWidth:2,height:40,marginTop:10,borderColor:'#fff', borderRadius:5, color:"#fff"}}
                value={setDistance(distance)}
                onChangeText={onChangeNumber}
                keyboardType="numeric"
            />
        </View>
    )
}