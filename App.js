import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Header from "./presentation/Header.js";
import Price from "./component/Price.js";

export default class App extends React.Component {
  mapThePriceData() {
    return [117, 222, 333, 4231].map(el => <Price price={el} />);
  }

  render() {
    return (
      <View>
        <Header />

        <ScrollView>{this.mapThePriceData()}</ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
