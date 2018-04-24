import React, { Component } from "react";
import { View, Image, TouchableOpacity, Keyboard } from "react-native";
import {
  icon,
  header,
  color
} from "../style/styles";
import { Login, Signup1, Signup2, Welcome } from "./First";
import { StackNavigator, NavigationActions } from "react-navigation";
import FeatherIcon from "react-native-vector-icons/Feather";
import Header from "./Header";
const SignupStack = StackNavigator(
  {
    Welcome: {
      screen: Welcome
    },
    Login: {
      screen: props => <Login {...props}/>
    },
    Signup1: {
      screen: props => <Signup1 {...props} />
    },
    Signup2: {
      screen: props => <Signup2 {...props} />
    }
  },
  {
    initialRouteName: "Welcome",
    navigationOptions: props => ({
      header: props => (
        <Header>
          <View style={header.left}>
            <TouchableOpacity
              onPress={() => {
                Keyboard.dismiss();
                let routes = props.navigation.state.routes;
                if (routes[routes.length - 1].params){
                  var key = routes[routes.length - 1].params.key;
                }
                if (key != undefined && key != "") {
                  console.log(props.navigation.state);
                  const action = NavigationActions.back({ key: key });
                  props.navigation.dispatch(action);
                } else {
                  props.navigation.dispatch(NavigationActions.back());
                }
              }}
            >
              <FeatherIcon name="arrow-left" size={26} color={color.blue} />
            </TouchableOpacity>
          </View>
          <View style={header.mid}>
            <Image
              source={require("../image/logo-blue.png")}
              style={icon.twitter}
            />
          </View>
          <View style={header.right} />
        </Header>
      )
    })
  }
);
export default class Signup extends Component {
  constructor(props) {
    super(props);
    console.log(props.navigation);
    this.state = {
      name: "",
      account: "",
      changeName: this.changeName,
      changeAccount: this.changeAccount,
      navigations: props.navigation
    };
  }
  changeName = text => {
    console.log(text);
    this.setState({
      name: text
    });
  };
  changeAccount = text => {
    console.log(text);
    this.setState({
      account: text
    });
  };
  render() {
    return (
      <View style={{ flex: 1, width: "100%", backgroundColor: "red" }}>
        <SignupStack screenProps={this.state} />
      </View>
    );
  }
}
