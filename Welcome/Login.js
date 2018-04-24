import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { signup1, login, header, icon, color } from "../style/styles";
import Header from "./Header";
import FontAwesome from "react-native-vector-icons/FontAwesome";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.props.navigation.state.key = 'Login';
    this.state = {
      account: "",
      password: "",
      onNext: false,
      showPassword: false
    };
  }
  changeAccount = text => {
    if (this.state.password != "" && text != "") {
      this.setState({
        account: text,
        onNext: true
      });
    } else {
      this.setState({
        account: text,
        onNext: false
      });
    }
  };
  changePassword = text => {
    if (this.state.account != "" && text != "") {
      this.setState({
        password: text,
        onNext: true
      });
    } else {
      this.setState({
        password: text,
        onNext: false
      });
    }
  };
  showPassword = () => {
    this.setState({
      showPassword: !this.state.showPassword
    });
  };
  nextScreen = () => {
    if (this.state.account === "chien") {
      if (this.state.password === "123") {
        this.props.screenProps.navigations.navigate('Drawer', {name: this.state.account})
      }else{
        alert("Sai mật khẩu: 123");
      }
    }else{
      alert("Sai tài khoản: chien");
    }
  };
  back = () => {
    this.props.navigation.goBack();
  }

  static navigationOptions = props => ({
    header: props => (
      <Header {...props}>
        <View style={header.mid}>
          <Image
            source={require("../image/logo-blue.png")}
            style={icon.twitter}
          />
        </View>
        <View style={header.right}>
          <TouchableOpacity onPress={() => {
            props.navigation.navigate('Signup1', {key: 'Login'});
          }}>
            <Text style={header.text}>Đăng ký</Text>
          </TouchableOpacity>
          <TouchableOpacity style={login.menu}>
            <FontAwesome name="ellipsis-v" size={26} color={color.blue} />
          </TouchableOpacity>
        </View>
      </Header>
    )
  });
  render() {
    
    return (
      <View style={login.container}>
        <View style={{flex: 1, width: '100%'}}>
        <Text style={login.title}>Đăng nhập Twitter</Text>
        </View>
        <View style={login.top}>
          
          <View style={signup1.vInput}>
            <Text>Điện thoại, email hoặc tên người dùng</Text>
            <TextInput
              style={signup1.input}
              autoFocus={true}
              ref="account"
              underlineColorAndroid={color.blue}
              returnKeyType="next"
              onChangeText={this.changeAccount}
              onEndEditing={this.submitAccount}
              selectTextOnFocus={true}
              autoCapitalize = 'none'
            />
          </View>

          <View style={signup1.vInput}>
            <Text>Mật khẩu</Text>
            <View style={login.password}>
              <TextInput
                style={signup1.input}
                ref="password"
                underlineColorAndroid={color.blue}
                onChangeText={this.changePassword}
                onEndEditing={this.submitPassword}
                secureTextEntry={!this.state.showPassword}
                selectTextOnFocus={true}
                autoCapitalize = 'none'
              />
              <TouchableOpacity
                style={login.showPassword}
                onPress={this.showPassword}
              >
                <FontAwesome
                  name="eye"
                  size={26}
                  color={this.state.showPassword ? color.blue : color.grey}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={login.forgot}>
              <Text>Quên mật khẩu?</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={signup1.containerBot}>
          <View style={signup1.border} />
          <View style={login.bot}>
            {this.state.onNext ? (
              <TouchableOpacity style={login.btnNext} onPress={this.nextScreen}>
                <Text style={signup1.btnText}>Đăng nhập</Text>
              </TouchableOpacity>
            ) : (
              <View style={[login.btnNext, { opacity: 0.7 }]}>
                <Text style={signup1.btnText}>Đăng nhập</Text>
              </View>
            )}
          </View>
        </View>
      </View>
    );
  }
}
