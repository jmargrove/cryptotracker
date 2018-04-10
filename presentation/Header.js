import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo";

export default class Header extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.topBar} />
        <LinearGradient
          colors={["black", "black"]}
          start={[0, 0.5]}
          end={[1, 0.5]}
          style={styles.header}
        >
          {/* <View style={styles.menuContainer}>
          <View style={styles.menuDivider}>
            <View style={styles.topBar} />
          </View>
          <View style={styles.menuDivider}>
            <View style={styles.midBar} />
          </View>
          <View style={styles.menuDivider}>
            <View style={styles.botBar} />
          </View>
        </View> */}
          <Text style={styles.title}> C R Y P T O - T R A C K E R</Text>
          {/* <View style={styles.menuContainer}>
          <View style={styles.menuDivider}>
            <View style={styles.Dot} />
          </View>
          <View style={styles.menuDivider}>
            <View style={styles.Dot} />
          </View>
          <View style={styles.menuDivider}>
            <View style={styles.Dot} />
          </View>
        </View> */}
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topBar: {
    backgroundColor: "white",
    width: 700,
    height: 20,
    borderBottomWidth: 2
  },
  menuContainer: {
    width: 60,
    height: 60
  },
  header: {
    width: 375,
    height: 100,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    borderBottomWidth: 5,
    borderBottomColor: "grey"
  },
  title: {
    color: "white",
    backgroundColor: "transparent",
    fontSize: 30,
    fontWeight: "bold"
  }
});
