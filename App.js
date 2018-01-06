import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./presentation/Header.js";
import Price from "./component/Price.js";

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Header />
        <Price />
        <Price />
        <Price />
        <Price />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
