import React from "react";
import {
  StyleSheet,
  Text,
  View,
  PanResponder,
  Animated,
  Button
} from "react-native";
import { LinearGradient } from "expo";

export default class PriceSlider extends React.Component {
  constructor() {
    super();
    this.state = {
      pan: new Animated.ValueXY(),
      circleColor: 0,
      scrollFreez: true,
      naviFlag: true
    };
  }

  forPageNavigation = () => {
    const { navigate } = this.props.navi;
    if (this.state.circleColor > 200 && this.state.naviFlag) {
      navigate("CryptoProfile");
      this.setState({ naviFlag: false });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    this.forPageNavigation();
  }

  scrollToggle = () => {
    // console.log("the state....", this.state);
    if (this.state.scrollFreez) {
      this.props.scrollFreez();
    } else {
      this.props.scrollFreez();
    }
  };

  componentWillMount() {
    // Add a listener for the delta value change
    this._val = { x: 0 };
    this.state.pan.addListener(value => (this._val = value));
    // Initialize PanResponder with move handling
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (e, gesture) => true,
      onPanResponderMove: (event, gestureState) => {
        if (
          gestureState.dx < 0 &&
          this.state.naviFlag &&
          this.state.circleColor <= 200
        ) {
          this.setState({ scrollFreez: false });
          this.setState({ circleColor: Math.abs(gestureState.dx) * 1.5 });
          // Animated timing animates the movements of the slider right;
          Animated.timing(this.state.pan, {
            toValue: { x: gestureState.dx, y: 0 },
            duration: 0
          }).start();
        }
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (this.state.naviFlag) {
          this.setState({ scrollFreez: true });
          // Animted spring resents the slider right
          Animated.timing(this.state.pan, {
            toValue: { x: 0, y: 0 },
            duration: 250
          }).start();
        }
      }
    });
  }

  render() {
    const panStyle = {
      transform: this.state.pan.getTranslateTransform()
    };
    const circleStyle = {
      borderColor: rgb(
        this.state.circleColor,
        this.state.circleColor,
        this.state.circleColor,
        1
      )
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
            <View style={[styles.buttonCircle, circleStyle]}>
              <Text
                style={{
                  color: rgb(
                    this.state.circleColor,
                    this.state.circleColor,
                    this.state.circleColor
                  ),
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
