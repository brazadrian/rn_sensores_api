import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import axios from "axios";

export default function Sensores() {
  const [sensores, setSensores] = useState([]);

  async function handleBuscar() {
    try {
      const response = await axios.get(
        "https://back-people.onrender.com/sensor"
      );
      setSensores(response.data.sensor);
    } catch (error) {
      console.error("Ocorreu um erro ao buscar os sensores:", error);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Veja todos os Sensores ao clicar no Botão!
      </Text>

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={handleBuscar}>
        <Text style={styles.buttonText}>Buscar</Text>
      </TouchableOpacity>

      {sensores.map((sensor, index) => (
        <View key={index} style={styles.sensorContainer}>
          <Text>
            <Text style={styles.boldText}>Nome: </Text>
            {sensor.nome}
          </Text>

          <Text>
            <Text style={styles.boldText}>Status: </Text>
            {sensor.status}
          </Text>

          <Text>
            <Text style={styles.boldText}>Área: </Text>
            {sensor.area}
          </Text>

          <Text>
            <Text style={styles.boldText}>Descrição: </Text>
            {sensor.descricao}
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#2F48D4",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  sensorContainer: {
    marginBottom: 10,
  },
  boldText: {
    fontWeight: "bold",
  },
});
