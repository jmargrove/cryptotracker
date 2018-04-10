import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  PanResponder
} from "react-native";
import Header from "./Header.js";
import Price from "../component/Price.js";
import PriceSlider from "./PriceSlider.js";
import Loader from "./Loader.js";

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      scrollFreez: true
    };
  }
  getCryptoDataFromApi() {
    fetch("https://api.coinmarketcap.com/v1/ticker/?limit=10")
      .then(r => r.json())
      .then(s => s.sort((a, b) => b.market_cap_usd - a.market_cap_usd))
      .then(res => this.setState({ data: res }));
  }

  componentDidMount() {
    this.getCryptoDataFromApi();
  }

  scrollFreez = () => {
    this.setState((prevState, props) => {
      return {
        scrollFreez: !prevState.scrollFreez
      };
    });
  };

  mapThePriceData() {
    if (this.state.data) {
      return this.state.data.map(el => (
        <PriceSlider
          acy={el.symbol}
          key={el.id}
          navi={this.props.navigation}
          scrollFreez={this.scrollFreez}
        >
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
        {/* <PriceSlider navi={this.props.navigation} /> */}

        <ScrollView scrollEnabled={true}>
          {/* <PriceSlider navi={this.props.navigation} /> */}
          {this.mapThePriceData(this.state.data)}
        </ScrollView>
      </View>
    );
  }
}
