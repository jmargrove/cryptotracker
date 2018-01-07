import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Header from "./presentation/Header.js";
import Price from "./component/Price.js";
import PriceSlider from "./presentation/PriceSlider.js";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }
  getCryptoDataFromApi() {
    fetch("https://api.coinmarketcap.com/v1/ticker/?start=100&limit=25")
      .then(r => r.json())
      .then(res => this.setState({ data: res }));
  }

  componentDidMount() {
    this.getCryptoDataFromApi();
  }

  mapThePriceData() {
    if (this.state.data) {
      console.log("data", this.state.data);
      return this.state.data.map(el => (
        <PriceSlider key={el.id}>
          <Price
            price={el.price_usd}
            acy={el.symbol}
            fullname={el.name}
            change24h={el.percent_change_24h}
            change7d={el.percent_change_7d}
          />
        </PriceSlider>
      ));
    }
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
