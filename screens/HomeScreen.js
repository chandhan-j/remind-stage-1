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

export default class HomeScreen extends Component {
  getStarted = () => {
    this.props.navigation.navigate("ScheduleScreen");
  };

  render() {
    return (
      <SafeAreaProvider>
        <View>
            <MyHeader title="Remind" />

            <Image
            source={require("../assets/calender.png")}
            style={{ width: 200, height: 200 }}
            />

            <Text> Welcome to Remind </Text>

            <TouchableOpacity onPress={this.getStarted} style = {styles.button}>
                <Text> Get Started </Text>
            </TouchableOpacity>
        </View>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
    button:{
        width:200,
        height:50,
        justifyContent:'center',
        alignItems : 'center',
        borderRadius: 10,
        backgroundColor: 'orange',
        shadowColor: "#000",
        shadowOffset: {
           width: 0,
           height: 8
         },
        elevation : 16
      }
})
