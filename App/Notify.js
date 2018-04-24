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
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { home, header } from "./styles";
export default class Notify extends Component {
  static navigationOptions = ({ navigation }) => ({
    tabBarIcon: ({ tintColor }) => (
      <View>
        <View style={header.notify}>
          <Text style={{fontSize: 10, fontWeight: 'bold'}}>5</Text>
        </View>
        <Image
          source={require("../image/TabBar/bell.png")}
          style={{
            width: width.smaller,
            height: height.smaller,
            tintColor: tintColor
          }}
        />
      </View>
    ),
    tabBarLabel: "Notify"
  });
  begin = e => {
    this.setState({
      begin: e.nativeEvent.contentOffset.y
    });
  };
  end = e => {
    let end = e.nativeEvent.contentOffset.y;
    let dy = end - this.state.begin;
    this.props.screenProps.scroll(dy);
  };
  render() {
    return (
      <ScrollView style={home.container} showsVerticalScrollIndicator={false}>
        <View style={{ width: "100%", height: 500, backgroundColor: "yellow" }}>
          <Text>fdsfsdfds</Text>
        </View>
        <View style={{ width: "100%", height: 500, backgroundColor: "red" }}>
          <Text>fdsfsfdsfdfds</Text>
        </View>
        <View style={{ width: "100%", height: 500, backgroundColor: "green" }}>
          <Text>fdsfssdfdsfdfds</Text>
        </View>
      </ScrollView>
    );
  }
}
