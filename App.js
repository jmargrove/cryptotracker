import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class App extends React.Component {
  async getData() {
    const data = await fetch("https://api.coinmarketcap.com/v1/ticker/");
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Crypto-updates</Text>
        </View>
        <View style={styles.body} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 5,
    backgroundColor: "red"
  },
  title: {
    fontSize: 10
  },
  header: {
    flex: 1,
    backgroundColor: "yellow"
  },
  container: {
    alignItems: "flex-start",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
