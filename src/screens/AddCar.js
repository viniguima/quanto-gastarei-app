import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, ScrollView } from "react-native";
import { Button } from "@react-native-material/core";
import Logo from "../components/Logo";
import { TouchableWithoutFeedback, Keyboard } from "react-native";

export default function AddCar({ navigation }) {
  const [carBrand, setCarBrand] = useState();
  const [carModel, setCarModel] = useState();
  const [carYear, setCarYear] = useState();
  const [carConsum, setCarConsum] = useState();
  const saveText = useState();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* marca,modelo,consumo medio,combustível ano */}
          <Logo />
          <Text style={styles.white_text}>
            Cadastre o carro para futuras consultas
          </Text>
          <Text style={{ color: "#fff", fontSize: 20, marginTop: 15 }}>
            Insira a marca do veículo
          </Text>
          <TextInput
            style={styles.TextInput}
            value={carBrand}
            onChangeText={setCarBrand}
            keyboardType="text"
            testID="carBrand"
          />
          <Text style={{ color: "#fff", fontSize: 20, marginTop: 15 }}>
            Insira o modelo do veículo:
          </Text>
          <TextInput
            style={styles.TextInput}
            value={carModel}
            onChangeText={setCarModel}
            keyboardType="text"
            testID="carModel"
          />
          <Text style={{ color: "#fff", fontSize: 20, marginTop: 15 }}>
            Insira o ano do veículo:
          </Text>
          <TextInput
            style={styles.TextInput}
            value={carYear}
            onChangeText={setCarYear}
            keyboardType="text"
            testID="carYear"
          />
          <Text style={{ color: "#fff", fontSize: 20, marginTop: 15 }}>
            Insira o consumo médio:
          </Text>
          <TextInput
            style={styles.TextInput}
            value={carConsum}
            onChangeText={setCarConsum}
            keyboardType="text"
            testID="avarageConsumption"
          />
          <Button
            title="Salvar"
            onPress={() => saveCar()}
            style={[styles.white_text, styles.button]}
            testID="saveButton"
          ></Button>
          <Text
            style={{
              flex: 1,
              alignItems: "center",
              textAlign: "center",
              color: "white",
              marginTop: 20,
              fontSize: 20,
            }}
          >
            {saveText}
          </Text>
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2a3540",
    alignItems: "center",
    justifyContent: "start",
  },
  white_text: {
    color: "white",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#5e4de0",
    width: 200,
    marginTop: 30,
  },
  button_consultar: {
    backgroundColor: "#808080",
    width: 200,
    marginTop: 20,
  },
  tinyLogo: {
    width: 180,
    height: 60,
  },
  TextInput: {
    borderWidth: 2,
    height: 45,
    width: 200,
    marginTop: 10,
    borderColor: "#fff",
    borderRadius: 5,
    color: "#fff",
  },
});
