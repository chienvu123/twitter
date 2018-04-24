import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { color } from "../style/color";

export default class Header extends Component {
  render() {
    return <View style={styles.container}>{this.props.children}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: "100%",
    backgroundColor: color.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  }
});
