import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Bubbles } from "react-native-loader";

export default class CandleGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      ylab: null,
      maxValue: null,
      minValue: null
    };
  }

  // calculate the min, max and intervals for the ylab....
  ylabConstruct() {
    if (this.props.data) {
      const maxValue = this.props.data.reduce((acc, el) => {
        return el.max > acc ? el.max : acc;
      }, 0);
      const minValue = this.props.data.reduce((acc, el) => {
        return el.min > acc ? el.min : acc;
      }, 0);
      this.setState({ maxValue: maxValue, minValue: minValue });

      const ylab = [];
      for (let i = minValue; i <= maxValue; i += (maxValue - minValue) / 7) {
        ylab.push(i);
      }
      return ylab;
    }
  }

  async componentDidUpdate() {
    await this.setState({ data: this.props.data });
    this.setState({ ylab: this.ylabConstruct() });
  }

  xLinesGraphs() {
    if (this.state.data) {
      return this.state.ylab.map(el => {
        return (
          <View style={styles.barContainer}>
            <View style={styles.barHolder}>
              <View style={styles.bar} />
            </View>
            <View style={styles.barValueContainer}>
              <Text style={styles.textContain}>12,000</Text>
            </View>
          </View>
        );
      });
    }
  }

  render() {
    console.log("passed parameters", this.props);
    return <View style={styles.graphContainer}>{this.xLinesGraphs()}</View>;
  }
}

const styles = StyleSheet.create({
  textContain: {
    fontSize: 10,
    margin: 10,
    color: "white",
    backgroundColor: "transparent"
  },
  bar: {
    width: 320,
    height: 1,
    backgroundColor: "grey"
  },
  barValueContainer: {
    width: 55,
    height: 300 / 7,
    backgroundColor: "#2D3C42",
    justifyContent: "center"
  },
  barHolder: {
    width: 320,
    height: 300 / 7,
    backgroundColor: "#2D3C42",
    justifyContent: "center"
  },
  barContainer: {
    width: 375,
    height: 300 / 7,
    backgroundColor: "blue",
    flexDirection: "row"
  },
  graphContainer: {
    width: 375,
    height: 300,
    backgroundColor: "green"
  }
});
