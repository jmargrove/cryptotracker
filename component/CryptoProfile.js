import React from "react";
import { View, Text, Button } from "react-native";
import { Bubbles } from "react-native-loader";
import Header from "./../presentation/Header.js";

export default class CrypoProfile extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Header />
        <Text />
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go that way"
          style={{ backgroundColor: "black", width: 100, height: 30 }}
        />
      </View>
    );
  }
}
