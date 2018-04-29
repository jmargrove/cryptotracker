import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { Bubbles } from "react-native-loader";
import { LineChart, Grid, YAxis, XAxis } from "react-native-svg-charts";
import { Defs, LinearGradient, Stop } from "react-native-svg";

export default class CandleGraph extends React.Component {
  dataHandler = dataArray => {
    if (dataArray) {
      return dataArray.map(el => {
        return (Number(el.max) + Number(el.min)) / 2;
      });
    }
  };

  renderingGraph = data => {
    const Gradient = () => (
      <Defs key={"gradient"}>
        <LinearGradient id={"gradient"} x1={"0"} y={"0%"} x2={"100%"} y2={"0%"}>
          <Stop offset={"0%"} stopColor={"rgb(134, 65, 244)"} />
          <Stop offset={"100%"} stopColor={"rgb(66, 194, 244)"} />
        </LinearGradient>
      </Defs>
    );

    if (data) {
      const contentInsc = { top: 10, bottom: 10 };
      return (
        <View
          style={{
            height: 200,
            padding: 5,
            flexDirection: "row",
            marginRight: 10
          }}
        >
          <LineChart
            style={{ flex: 1 }}
            data={data}
            contentInset={contentInsc}
            svg={{
              strokeWidth: 2,
              stroke: "url(#gradient)"
            }}
          >
            <Grid />
            <Gradient />
          </LineChart>

          <YAxis
            data={data}
            style={{ marginBottom: 10, marginLeft: 10 }}
            contentInset={contentInsc}
            svg={{ fontSize: 10, fill: "black" }}
          />
        </View>
      );
    }
  };
  render() {
    const data = this.dataHandler(this.props.data);
    return (
      <View style={styles.graphContainer}>{this.renderingGraph(data)}</View>
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
