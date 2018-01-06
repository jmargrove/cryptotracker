import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo";

export default class Price extends React.Component {
  render() {
    return (
      <LinearGradient
        colors={["#717C89", "#2D3C42"]}
        start={[0.5, 0]}
        end={[0.5, 0.25]}
        style={styles.priceContainer}
      >
        <View style={styles.topContainer}>
          <View style={styles.leftPrice}>
            <View style={styles.acrynm}>
              <Text style={styles.acrynmText}>BTC</Text>
            </View>
            <View style={styles.dividerBar}>
              <LinearGradient
                colors={["#62D8CE", "#62D8CE"]}
                style={styles.divBar}
              />
            </View>
            <View style={styles.fullNameBox}>
              <Text style={styles.fullnameText}>bitcoin</Text>
            </View>
          </View>
          <View style={styles.rightPrice}>
            <View style={styles.valueBox}>
              <Text style={styles.valueText}>12,000</Text>
            </View>
            <View style={styles.dollarBox}>
              <Text style={styles.dollarText}>$</Text>
            </View>
          </View>
        </View>
        <View style={styles.midContainer}>
          <LinearGradient
            colors={["#37758F", "#C2F9BB"]}
            start={[0, 0.5]}
            end={[1, 0.5]}
            style={styles.divisionBar}
          />
        </View>
        <View style={styles.botContainer} />
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  dollarText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    backgroundColor: "transparent"
  },
  valueText: {
    color: "#62D8CE",
    backgroundColor: "transparent",
    fontSize: 25
  },
  dollarBox: {
    flex: 1,
    // backgroundColor: "red",
    justifyContent: "center"
  },
  valueBox: {
    flex: 5,
    // backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "flex-end"
  },
  fullnameText: {
    fontSize: 20,
    color: "white",
    backgroundColor: "transparent"
  },
  acrynmText: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
    backgroundColor: "transparent"
  },
  divBar: {
    width: 3,
    height: 30
  },
  acrynm: {
    flex: 2,
    // backgroundColor: "red",
    justifyContent: "flex-end",
    alignItems: "flex-end"
  },
  dividerBar: {
    flex: 0.25,
    // backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center"
  },
  fullNameBox: {
    flex: 4
    // backgroundColor: "blue"
  },
  leftPrice: {
    flex: 3,
    // backgroundColor: "purple",
    flexDirection: "row",
    alignItems: "center"
  },
  rightPrice: {
    flex: 2.5,
    flexDirection: "row"
    // backgroundColor: "orange"
  },
  divisionBar: {
    width: 365,
    height: 5
  },
  topContainer: {
    flex: 10,
    flexDirection: "row"
    // backgroundColor: "blue"
  },
  midContainer: {
    flex: 2,
    // backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center"
  },
  botContainer: {
    flex: 10
    // backgroundColor: "red"
  },
  priceContainer: {
    marginTop: 5,
    width: 375,
    height: 100
  }
});
