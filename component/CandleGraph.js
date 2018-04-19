import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { Bubbles } from "react-native-loader";

const maxCalc = array => {
  return array.reduce((acc, el) => {
    if (Number(el.max) > acc) {
      return Number(el.max);
    } else {
      return acc;
    }
  }, 0);
};

const minCalc = array => {
  return array.reduce((acc, el) => {
    if (Number(el.min) < acc) {
      return Number(el.min);
    } else {
      return acc;
    }
  }, 9999999);
};

export default class CandleGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
      // ylab: null,
      // maxValue: null,
      // minValue: null
    };
  }

  componentDidUpdate(theProps, nextProps) {
    if (theProps.data != nextProps.data) {
      this.ref.scrollView.scrollToEnd({ animated: true });
    }
  }

  xAxisHandler(theProps) {
    if (theProps) {
      const trimProps = theProps;
      const maxY = maxCalc(trimProps);
      const minY = minCalc(trimProps);
      console.log("CG props:", minY, maxY);

      //
      //   //// ok so we know the max and the min values.....
      const ymax = Math.round(maxY / 100) * 100;
      const ymin = Math.floor(minY / 100) * 100;
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
      //
      const spacingOne = [10, 60, 110, 160, 210, 260];
      //
      //   const spacingTwo = [];
      //   for (let i = 10; i < 260; i += 250 / 4) {
      //     spacingTwo.push(i);
      //   }
      //   spacingTwo.push(260);
      //
      return spacingOne.map((el, i) => {
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
      const trimProps = theProps;
      const maxY = trimProps.reduce((acc, el) => {
        if (Number(el.max) > acc) {
          return Number(el.max);
        } else {
          return acc;
        }
      }, 0);

      const minY = trimProps.reduce((acc, el) => {
        if (Number(el.min) < acc) {
          return Number(el.min);
        } else {
          return acc;
        }
      }, 9999999);

      return trimProps.map(el => {
        return {
          timestamp: el.timestamp,
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
        console.log(i);
        return (
          <View key={i}>
            <View
              style={[
                styles.candleTail,
                {
                  top: el.max - 20,
                  height: el.max - el.min
                }
              ]}
            />
            <View
              style={[
                styles.candleMain,
                {
                  backgroundColor: el.close > el.open ? "green" : "red",
                  top: el.close > el.open ? el.close - 20 : el.open - 20,
                  height: el.max - el.min
                }
              ]}
            />
            <View style={styles.ticker} />
            {(i + 1) % 5 == 0 ? (
              <Text style={styles.timeStamp}>{el.timestamp.slice(11, 16)}</Text>
            ) : null}
          </View>
        );
      });
    }
  }

  render() {
    console.log(
      "passed parameters",
      this.props.data ? this.props.data[0] : null
    );
    return (
      <View style={styles.graphContainer}>
        {this.xAxisHandler(this.props.data)}
        <ScrollView horizontal={true} style={styles.hScrole} ref="scrollView">
          {this.candleStickHandler(this.props.data)}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  timeStamp: {
    fontSize: 10,
    zIndex: 0,
    top: 270,
    transform: [{ rotate: "45deg" }],
    marginLeft: 0
  },
  ticker: {
    backgroundColor: "grey",
    height: 5,
    width: 2,
    zIndex: 99,
    top: 260,
    marginLeft: 10
  },
  hScrole: {
    //  backgroundColor: "lightblue",
    width: 320,
    height: 300,
    top: 0,
    left: 0
  },
  candleTail: {
    position: "absolute",
    height: 80,
    width: 2,
    top: 10,
    backgroundColor: "black",
    marginLeft: 10
  },
  candleMain: {
    position: "absolute",
    top: 30,
    height: 50,
    width: 6,
    marginLeft: 10,
    backgroundColor: "black"
  },
  xText: {
    position: "absolute",
    left: 325
  },
  xAxis: {
    position: "absolute",
    width: 320,
    height: 2,
    backgroundColor: "grey"
  },
  graphContainer: {
    width: 375,
    height: 300,
    backgroundColor: "white"
  }
});
