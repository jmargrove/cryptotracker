import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo";

export default class Header extends React.Component {
  render() {
    return (
      <LinearGradient
        colors={["#37758F", "#469882"]}
        start={[0, 0.5]}
        end={[1, 0.5]}
        style={styles.header}
      >
        <View style={styles.menuContainer}>
          <View style={styles.menuDivider}>
            <View style={styles.topBar} />
          </View>
          <View style={styles.menuDivider}>
            <View style={styles.midBar} />
          </View>
          <View style={styles.menuDivider}>
            <View style={styles.botBar} />
          </View>
        </View>
        <Text style={styles.title}> CRYPTO STAT </Text>
        <View style={styles.menuContainer}>
          <View style={styles.menuDivider}>
            <View style={styles.Dot} />
          </View>
          <View style={styles.menuDivider}>
            <View style={styles.Dot} />
          </View>
          <View style={styles.menuDivider}>
            <View style={styles.Dot} />
          </View>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  Dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "#717C89"
  },
  botBar: {
    width: 20,
    height: 5,
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "#717C89"
  },
  midBar: {
    width: 35,
    height: 5,
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "#717C89"
  },
  topBar: {
    width: 50,
    height: 5,
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "#717C89"
  },
  menuDivider: {
    flex: 1,
    // backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center"
  },
  menuContainer: {
    width: 60,
    height: 60
    // backgroundColor: "yellow"
  },
  header: {
    width: 375,
    height: 100,
    // backgroundColor: "#469882",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row"
  },
  title: {
    color: "white",
    backgroundColor: "transparent",
    fontSize: 20,
    fontWeight: "bold"
  }
});
