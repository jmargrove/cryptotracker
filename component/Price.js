import React from "react";
import { StyleSheet, Text, View, PanResponder, Animated } from "react-native";
import { LinearGradient } from "expo";

export default class Price extends React.Component {
  exchangeChange(timePeriod, direction, numberChange, side) {
    return (
      <View style={styles.leftBot}>
        <View style={styles.upperPriceChange}>
          <View style={styles.timePeriodBox}>
            <Text style={styles.timePeriod}>{timePeriod}</Text>
          </View>
          <View style={styles.triangleBox}>
            <View style={styles.triangle} />
          </View>
          <View style={styles.numberBox}>
            <Text style={styles.numberChange}>{numberChange}</Text>
          </View>
          <View style={styles.percentBox}>
            <Text style={styles.percentSymbol}>%</Text>
          </View>
        </View>
        <View style={styles.styleBar}>
          <LinearGradient
            colors={["#37758F", "#C2F9BB"]}
            start={[0, 0.5]}
            end={[1, 0.5]}
            style={{ width: 130, height: 3 }}
          />
        </View>
      </View>
    );
  }

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
              <Text style={styles.acrynmText}>{this.props.acy}</Text>
            </View>
            <View style={styles.dividerBar}>
              <LinearGradient
                colors={["#62D8CE", "#62D8CE"]}
                style={styles.divBar}
              />
            </View>
            <View style={styles.fullNameBox}>
              <Text style={styles.fullnameText}>{this.props.fullname}</Text>
            </View>
          </View>
          <View style={styles.rightPrice}>
            <View style={styles.valueBox}>
              <Text style={styles.valueText}>{this.props.price}</Text>
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
        <View style={styles.botContainer}>
          {this.exchangeChange("7d:", "up", this.props.change7d)}
          {this.exchangeChange("24h:", "down", this.props.change24h)}
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  timePeriod: {
    fontSize: 15,
    color: "white",
    backgroundColor: "transparent"
  },
  numberChange: {
    fontSize: 15,
    color: "#C2F9BB",
    backgroundColor: "transparent"
  },
  percentSymbol: {
    fontSize: 25,
    color: "white",
    fontWeight: "bold",
    backgroundColor: "transparent",
    marginLeft: 2
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 20,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "#C2F9BB"
  },
  timePeriodBox: {
    flex: 1,
    // backgroundColor: "brown",
    justifyContent: "center",
    alignItems: "center"
  },
  triangleBox: {
    flex: 1,
    // backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center"
  },
  numberBox: {
    flex: 2,
    alignItems: "flex-end",
    // backgroundColor: "blue",
    justifyContent: "center"
  },
  percentBox: {
    flex: 2,
    // backgroundColor: "grey",
    alignItems: "flex-start",
    justifyContent: "center"
  },
  styleBar: {
    // backgroundColor: "red",
    flex: 2,
    alignItems: "center",
    justifyContent: "center"
  },
  upperPriceChange: {
    flex: 6,
    // backgroundColor: "blue",
    flexDirection: "row"
  },
  leftBot: {
    flex: 1
    // backgroundColor: "green"
  },
  rightBot: {
    flex: 1,
    backgroundColor: "yellow"
  },
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
    fontSize: 15,
    color: "white",
    backgroundColor: "transparent"
  },
  acrynmText: {
    fontSize: 18,
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
    flex: 10,
    // backgroundColor: "red"
    flexDirection: "row"
  },
  priceContainer: {
    // marginTop: 7.5,
    width: 375,
    height: 100
  }
});
