import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Keyboard
} from "react-native";
import { color } from "../style/color";
import { width, height, fontSize, device } from "../style/size";
import { welcome, signup1, signup2 } from "../style/styles";
import { StackNavigator, NavigationActions } from "react-navigation";

export default class Comment extends Component {
  
  render() {
    return (
      <ScrollView
        style={{ flex: 1, width: "100%", backgroundColor: color.white }}
        showsVerticalScrollIndicator={false}
      >
        
      </ScrollView>
    );
  }
}
