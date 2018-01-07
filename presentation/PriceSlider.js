import React from "react";
import { StyleSheet, Text, View, PanResponder, Animated } from "react-native";
import { LinearGradient } from "expo";

export default class PriceSlider extends React.Component {
  constructor() {
    super();
    this.state = {
      pan: new Animated.ValueXY()
    };
  }

  animate() {
    this.animatedValue.setValue(0);
    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear
    }).start(() => this.animate());
  }

  componentWillMount() {
    // Add a listener for the delta value change
    this._val = { x: 0 };
    this.state.pan.addListener(value => (this._val = value));
    // Initialize PanResponder with move handling
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (e, gesture) => true,
      onPanResponderMove: Animated.event([null, { dx: this.state.pan.x }]),
      onPanResponderRelease: (evt, gestureState) => {
        Animated.spring(this.state.pan, {
          toValue: { x: 0, y: 0 },
          duration: 500
        }).start();
        console.log("gs", gestureState);
      }
    });
  }

  render() {
    console.log("the state", this.state.pan);
    const panStyle = {
      transform: this.state.pan.getTranslateTransform()
    };

    return (
      <View style={styles.container}>
        <LinearGradient
          colors={["#469882", "#37758F"]}
          start={[0.8, 0]}
          end={[1, 1]}
          style={styles.backgroundBox}
        >
          <View style={styles.buttonBox}>
            <View style={styles.buttonCircle}>
              <Text
                style={{
                  color: "white",
                  fontSize: 30,
                  backgroundColor: "transparent"
                }}
              >
                π
              </Text>
            </View>
          </View>
          <Animated.View
            {...this.panResponder.panHandlers}
            style={[panStyle, styles.priceSlider]}
          >
            {this.props.children}
          </Animated.View>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 5,
    borderColor: "#2D3C42",
    // backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center"
  },
  priceSlider: {
    position: "absolute",
    width: 375,
    height: 100,
    backgroundColor: "green"
  },
  buttonBox: {
    width: 90,
    height: 60,
    justifyContent: "center",
    alignItems: "center"
  },
  backgroundBox: {
    width: 375,
    height: 100,
    alignItems: "flex-end",
    justifyContent: "center"
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: 375,
    height: 110,
    backgroundColor: "transparent"
  }
});
