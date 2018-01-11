import { StackNavigator } from "react-navigation";
import HomeScreen from "../presentation/HomeScreen.js";
import CryptoProfile from "./CryptoProfile.js";

exports.Navigator = StackNavigator(
  {
    Home: { screen: HomeScreen },
    CryptoProfile: { screen: CryptoProfile }
  },
  { headerMode: "none" }
);
