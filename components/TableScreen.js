import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import ts from "./ts";
/* 
export default (props) => {
  function listar() {
    return ts.map((pessoa) => {
      return (
        <View style={styles.container}>
          <View style={styles.tableRow}>
            <Text style={styles.tableHeader}>ID</Text>
            <Text style={styles.tableHeader}>Name</Text>
            <Text style={styles.tableHeader}>Age</Text>
          </View>

          {pessoa.map((item) => (
            <View style={styles.tableRow} key={item.id}>
              <Text style={styles.tableData}>{item.id}</Text>
              <Text style={styles.tableData}>{item.name}</Text>
              <Text style={styles.tableData}>{item.age}</Text>
            </View>
          ))}
        </View>
      );
    });
  }
  return (
    <>
      <Text>Lista de produtos</Text>
      {listar()}
    </>
  );
};
 */

export default TableScreen = () => {
  const data_ts = ts;
  
  /* Saída de dados pelo console */
  data_ts.map((pessoa) => {
    console.log(
      "ID: " + pessoa.id,
      "Idade: " + pessoa.age,
      "Nome: " + pessoa.name
    );
  });

  return (
    <View style={styles.container}>
      <View style={styles.tableRow}>
        <Text style={styles.tableHeader}>ID</Text>
        <Text style={styles.tableHeader}>Name</Text>
        <Text style={styles.tableHeader}>Age</Text>
      </View>

      {data_ts.map((pessoa) => (
        <View style={styles.tableRow} key={pessoa.id}>
          <Text style={styles.tableData}>{pessoa.id}</Text>
          <Text style={styles.tableData}>{pessoa.name}</Text>
          <Text style={styles.tableData}>{pessoa.age}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  tableRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  tableHeader: {
    flex: 1,
    fontWeight: "bold",
    fontSize: 16,
  },
  tableData: {
    flex: 1,
    fontSize: 16,
  },
});
