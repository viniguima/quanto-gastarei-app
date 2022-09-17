import React, { useState} from "react";
import { View, TextInput, Text } from "react-native";

export default function TextBox(){
    // const [nome, setNome]=useState("") 
    return(
        <View>
            <Text style={{color:"#fff", fontSize:20}}>Insira a distância do trageto em Km</Text>
            <TextInput
                style={{borderWidth:2,height:40,marginTop:10,borderColor:'#fff', borderRadius:5, color:"#fff"}}
                // value={nome}
                keyboardType="numeric"
            />
        </View>
    )
}