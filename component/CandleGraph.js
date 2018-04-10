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

  async componentDidUpdate() {}

  xAxisHandler(theProps) {
    if (theProps) {
      const maxY = theProps.reduce((acc, el) => {
        if (Number(el.max) > acc) {
          return Number(el.max);
        } else {
          return acc;
        }
      }, 0);

      const minY = theProps.reduce((acc, el) => {
        if (Number(el.min) < acc) {
          return Number(el.min);
        } else {
          return acc;
        }
      }, 9999999);

      //// ok so we know the max and the min values.....
      const ymax = Math.round(maxY / 100) * 100;
      const ymin = Math.round(minY / 100) * 100;
      const values = [];
      for (
        let i = ymax;
        i > ymin;
        i -= Math.round((ymax - ymin) / 6 / 100) * 100
      ) {
        values.push(i);
      }
      values.push(ymin);
      console.log(values);

      const spacingOne = [10, 60, 110, 160, 210, 260];

      const spacingTwo = [];
      for (let i = 10; i < 260; i += 250 / 4) {
        spacingTwo.push(i);
      }
      spacingTwo.push(260);

      return (values.length === 6 ? spacingOne : spacingTwo).map((el, i) => {
        return (
          <View key={el}>
            <View style={[styles.xAxis, { top: el }]} />
            <Text style={[styles.xText, { top: el - 8 }]}>{values[i]}</Text>
          </View>
        );
      });
    }
  }

  scalerHandler(theProps) {
    if (theProps) {
      const maxY = theProps.reduce((acc, el) => {
        if (Number(el.max) > acc) {
          return Number(el.max);
        } else {
          return acc;
        }
      }, 0);

      const minY = theProps.reduce((acc, el) => {
        if (Number(el.min) < acc) {
          return Number(el.min);
        } else {
          return acc;
        }
      }, 9999999);

      return theProps.map(el => {
        return {
          close: (el.close - minY) / (maxY - minY) * 250 + 10,
          open: (el.open - minY) / (maxY - minY) * 250 + 10,
          max: (el.max - minY) / (maxY - minY) * 250 + 10,
          min: (el.min - minY) / (maxY - minY) * 250 + 10
        };
      });
    }
  }

  candleStickHandler(theProps) {
    if (theProps) {
      const newData = this.scalerHandler(theProps);
      console.log(newData.length);
      return newData.map((el, i) => {
        return (
          <View key={i}>
            <View
              style={[styles.candleTail, { left: 10 + i * 10, top: el.max }]}
            />
            <View
              style={[
                styles.candleMain,
                { left: 8 + i * 10, top: el.max + 10 }
              ]}
            />
          </View>
        );
      });
    }
  }

  render() {
    console.log("passed parameters", this.props.data);
    return (
      <View style={styles.graphContainer}>
        {this.xAxisHandler(this.props.data)}
        {this.candleStickHandler(this.props.data)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  candleTail: {
    position: "absolute",
    height: 80,
    width: 2,
    top: 10,
    backgroundColor: "black"
  },
  candleMain: {
    position: "absolute",
    top: 30,
    height: 50,
    width: 6,
    backgroundColor: "black"
  },
  xText: {
    position: "absolute",
    left: 325
  },
  xAxis: {
    position: "absolute",
    left: 20,
    width: 300,
    height: 2,
    backgroundColor: "grey"
  },
  graphContainer: {
    width: 375,
    height: 300,
    backgroundColor: "white"
  }
});
