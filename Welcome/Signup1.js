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
import { validateEmail, validatePhone } from "./check";
import Welcome from "./Welcome";
import { StackNavigator, NavigationActions } from "react-navigation";

export default class Signup1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      email: "",
      showEmail: false,
      onEmail: false,
      isEmail: false,
      isPhone: false,
      isName: null,
      isSelected: false
    };
  }
  changeName = text => {
    this.setState({
      name: text,
      isSelected: false
    });
  };
  changePhone = text => {
    if (!this.state.onEmail) {
      this.setState({
        phone: text,
        isSelected: false
      });
    } else {
      this.setState({
        email: text,
        isSelected: false
      });
    }
  };
  onShowEmail = () => {
    this.setState({
      phone: "",
      showEmail: true
    });
  };
  offShowEmail = () => {
    this.setState({
      email: "",
      showEmail: false
    });
  };
  onEmail = () => {
    this.refs.phone.clear();
    this.setState({
      onEmail: true,
      isPhone: false
    });
  };
  onPhone = () => {
    this.refs.phone.clear();
    this.setState({
      onEmail: false,
      isEmail: false
    });
  };
  checkName = () => {
    if (!this.state.isSelected) {
      if (this.state.name != "") {
        this.setState(
          {
            isName: true
          },
          () => {
            this.refs.phone.focus();
            this.props.screenProps.changeName(this.state.name);
          }
        );
      } else {
        this.setState(
          {
            isName: false
          },
          () => {
            this.refs.name.focus();
          }
        );
      }
    }
  };
  check = () => {
    if (!this.state.isSelected && this.state.name != "") {
      if (this.state.phone != "") {
        let length = this.state.phone.length;
        if (length >= 9 && length <= 15) {
          if (validatePhone(this.state.phone)) {
            this.setState(
              {
                isPhone: true,
                showEmail: false
              },
              () => {
                this.props.screenProps.changeAccount(this.state.phone);
              }
            );
          } else {
            this.setState(
              {
                isPhone: false,
                showEmail: false
              },
              () => this.refs.phone.focus()
            );
          }
        } else {
          this.refs.phone.focus();
        }
      } else {
        this.checkEmail();
      }
    }
  };
  checkEmail = () => {
    if (validateEmail(this.state.email)) {
      this.setState(
        {
          isEmail: true,
          showEmail: false
        },
        () => this.props.screenProps.changeAccount(this.state.email)
      );
    } else {
      this.setState(
        {
          isEmail: false,
          showEmail: false
        },
        () => this.refs.phone.focus()
      );
    }
  };

  onSelect = select => {
    if (select === "name") {
      this.refs.name.focus();
    } else {
      this.refs.phone.focus();
    }
  };
  nextScreen = () => {
    this.setState({
      isSelected: true
    });
    Keyboard.dismiss();

    this.props.navigation.navigate("Signup2", {
      onSelect: this.onSelect
    });
  };
  render() {
    let onNext =
      this.state.isName && (this.state.isPhone || this.state.isEmail)
        ? true
        : false;
    let Icon = props => (
      <Image source={require("../image/check.png")} style={signup1.check} />
    );
    return (
      <View style={signup1.container}>
        <View style={signup1.top}>
          <View style={signup1.vInput}>
            <TextInput
              style={signup1.input}
              autoFocus={true}
              ref="name"
              placeholder="Tên của bạn?"
              placeholderTextColor="grey"
              underlineColorAndroid={color.blue}
              returnKeyType="next"
              onChangeText={this.changeName}
              onFocus={this.offShowEmail}
              onEndEditing={this.checkName}
              selectTextOnFocus={true}
              autoCapitalize = 'none'
            />
            {this.state.isName ? <Icon /> : this.state.isName === false ? 
            <View style={signup1.vError}><Text style={{color: color.red}}>Tên của bạn là?</Text></View> : null}
          </View>
          <View style={signup1.vInput}>
            <TextInput
              style={signup1.input}
              ref="phone"
              placeholder={this.state.onEmail ? "Email" : "Số điện thoại"}
              placeholderTextColor="grey"
              underlineColorAndroid={color.blue}
              keyboardType={!this.state.onEmail ? "numeric" : "email-address"}
              onChangeText={this.changePhone}
              onFocus={this.onShowEmail}
              onEndEditing={this.check}
              selectTextOnFocus={true}
              autoCapitalize = 'none'
            />
            {this.state.isEmail || this.state.isPhone ? <Icon /> : null}
          </View>
        </View>
        <View style={signup1.containerBot}>
          <View style={signup1.border} />
          <View style={signup1.bot}>
            <View style={signup1.btnEmail}>
              {this.state.showEmail ? (
                this.state.onEmail ? (
                  <Text style={{ color: color.blue }} onPress={this.onPhone}>
                    Sử dụng điện thoại
                  </Text>
                ) : (
                  <Text style={{ color: color.blue }} onPress={this.onEmail}>
                    Sử dụng email
                  </Text>
                )
              ) : null}
            </View>

            {onNext ? (
              <TouchableOpacity
                style={signup1.btnNext}
                onPress={this.nextScreen}
              >
                <Text style={{ fontWeight: "bold", color: color.white }}>
                  Tiếp
                </Text>
              </TouchableOpacity>
            ) : (
              <View style={[signup1.btnNext, { opacity: 0.5 }]}>
                <Text style={{ fontWeight: "bold", color: color.white }}>
                  Tiếp
                </Text>
              </View>
            )}
          </View>
        </View>
      </View>
    );
  }
}
