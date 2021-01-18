import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Touchable,
} from "react-native";
import MyHeader from "../components/MyHeader";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default class ScheduleScreen extends Component {
  render() {
    return (
      <SafeAreaProvider>
        <View>
          <MyHeader title="Schedule Reminders" />
        </View>
      </SafeAreaProvider>
    );
  }
}
