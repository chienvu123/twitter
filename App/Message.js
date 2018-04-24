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
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { home } from "./styles";
export default class Message extends Component {
  static navigationOptions = ({ navigation }) => ({
    tabBarIcon: ({tintColor}) => <Image source={require('../image/TabBar/message.png')} style={{width: 24, height: 24, tintColor: tintColor}} />,
    tabBarLabel: "Message"
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
  }
  render() {
    return (
      <ScrollView
        style={home.container}
        
        showsVerticalScrollIndicator={false}
      >
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
