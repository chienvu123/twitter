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
import Welcome from "./Welcome";
import { StackNavigator, NavigationActions } from "react-navigation";

export default class Signup2 extends Component {
  onPress = select => {
    this.props.navigation.goBack();
    this.props.navigation.state.params.onSelect(select);
  };
  render() {
    return (
      <ScrollView
        style={{ flex: 1, width: "100%", backgroundColor: color.white }}
        showsVerticalScrollIndicator={false}
      >
        <View style={signup2.container}>
          <View style={signup2.top}>
            <Text style={signup2.slogan}>Tạo tài khoản của bạn</Text>
            <TouchableOpacity
              style={signup2.btnInput}
              onPress={() => this.onPress("name")}
            >
              <Text
                style={{
                  color: color.black,
                  fontSize: fontSize.h4,
                  lineHeight: 22
                }}
              >
                {this.props.screenProps.name}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={signup2.btnInput}
              onPress={() => this.onPress("phone")}
            >
              <Text
                style={{
                  color: color.black,
                  fontSize: fontSize.h4,
                  lineHeight: 22
                }}
              >
                {this.props.screenProps.account}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={signup2.button}>
              <Text style={signup2.btnText}>Đăng ký</Text>
            </TouchableOpacity>
          </View>
          <View style={signup2.bot}>
            <Text
              style={{
                color: color.black,
                fontSize: 15.3,
                lineHeight: 22
              }}
            >
              Bằng việc đăng ký, bạn đã đồng ý với các
              <Text style={{ color: color.blue, marginLeft: 5 }}>
                {" "}
                Điều khoản dịch vụ{" "}
              </Text>
              và
              <Text style={{ color: color.blue, marginLeft: 5 }}>
                {" "}
                các Chính sách riêng tư{" "}
              </Text>
              , bao gồm việc{" "}
              <Text style={{ color: color.blue, marginLeft: 5 }}>
                Sử dụng cookie
              </Text>. Những người khác sẽ có thể tìm thấy bạn qua email hoặc số
              điện thoại khi được cung cấp
              <Text style={{ color: color.blue, marginLeft: 5 }}>
                {" "}
                Tùy chọn riêng tư{" "}
              </Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}
