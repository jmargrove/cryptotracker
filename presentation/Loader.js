import React from "react";
import { View } from "react-native";
import { Bubbles } from "react-native-loader";

export default class Loader extends React.Component {
  render() {
    return (
      <View
        style={{
          width: 375,
          height: 500,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Bubbles size={40} color="#37758F" />
      </View>
    );
  }
}
