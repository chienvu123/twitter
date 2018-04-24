import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { color } from "../../style/color";
import { width, height, fontSize, size } from "../../style/size";

export default class Bookmarks extends Component {
  render() {
    return (
      <View style={header.container}>
        <Text style={header.title}>Dấu trang</Text>
      </View>
    );
  }
}

const header = StyleSheet.create({
  container: {
    marginLeft: 10,
    alignItems: "center",
    width: "100%",
    height: '100%',
    flexDirection: 'row',
  },
  title: {
    color: color.black,
    fontSize: fontSize.h4,
    fontWeight: '500',
  }
});
