import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { color } from "../style/color";
import { welcome } from "../style/styles";
import { width, height } from "../style/size";
import Logo from "./Logo";

import { StackNavigator } from "react-navigation";
class WelcomeCopy extends Component {
  render() {
    return (
      <View style={welcome.container}>
        <View style={welcome.logo}>
          <Image
            source={require("../image/logo-blue.png")}
            style={{ width: width.bigger, height: height.bigger }}
          />
        </View>
        <View style={welcome.mid}>
          <Text style={welcome.txtLogo}>
            Xem chuyện gì đang xảy ra trên thế giới ngay lúc này
          </Text>
          <TouchableOpacity
            style={welcome.button}
            onPress={() => this.props.navigation.navigate("Signup1")}
          >
            <Text style={welcome.btnText}>Bắt đầu</Text>
          </TouchableOpacity>
        </View>
        <View style={welcome.bot}>
          <Text style={{ color: color.black }}>
            Đã có một tài khoản?
            <Text 
              style={{ color: color.blue, marginLeft: 5 }}
              onPress={() => this.props.navigation.navigate('Login')}
              > Đăng nhập</Text>
          </Text>
        </View>
      </View>
    );
  }
}

export default class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: <Logo />
    };
    this.props.navigation.state.key = 'Welcome';
  }
  static navigationOptions = {
    header: false
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        screen: <WelcomeCopy {...this.props} />
      });
    }, 100);
  }
  render() {
    return this.state.screen;
  }
}
