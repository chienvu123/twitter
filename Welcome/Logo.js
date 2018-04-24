import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { color } from "../style/color";

export default class Logo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require("../image/logo-white.png")}
          style={{ width: 90, height: 90 }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: color.blue
  }
});
