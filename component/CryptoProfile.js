import React from "react";
import { View, Text, Button } from "react-native";
import { Bubbles } from "react-native-loader";
import Header from "./../presentation/Header.js";

export default class CrypoProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  getCandleData(theProps) {
    console.log("the props:", theProps);
    fetch("https://api.hitbtc.com/api/2/public/candles/ETHBTC?period=M30")
      .then(r => r.json())
      .then(res => this.setState({ data: res }));
  }

  componentDidMount(props) {
    this.getCandleData(this.props.navigation.state.params.coin);
  }

  render() {
    console.log("passed parameters", this.state.data);
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Header />
        <Text>{this.props.navigation.state.params.coin}</Text>
        <Button
          onPress={() => navigate("Home")}
          title="Go that way"
          style={{ backgroundColor: "black", width: 100, height: 30 }}
        />
      </View>
    );
  }
}
