import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  Animated,
} from "react-native";
import { color, header } from "../styles";
import {
  TabNavigator,
} from "react-navigation";
import { Home, Message, Notify, Search } from "../ScreenComponent";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { HeaderHome } from "../../Component/header/HeaderComponent";


const TabBarHeader = TabNavigator(
  {
    Home: {
      screen: Home
    },
    Search: {
      screen: Search
    },
    Notify: {
      screen: Notify
    },
    Message: {
      screen: Message
    }
  },
  {
    initialRouteName: 'Home',
    tabBarPosition: "top",
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: {
      activeTintColor: color.blue,
      inactiveTintColor: color.black,
      showLabel: false,
      showIcon: true,
      style: {
        backgroundColor: color.white
      },
      indicatorStyle: {
        height: 3,
        backgroundColor: color.blue
      }
    }
  }
);


const heightValue = 60;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: <HeaderHome />,
      heightAni: new Animated.Value(heightValue)
    };
  }
  scroll = value => {
    if (value >= 0) {
      Animated.timing(this.state.heightAni, {
        toValue: 0,
        duration: 200
      }).start();
    } else {
      Animated.timing(this.state.heightAni, {
        toValue: heightValue,
        duration: 200
      }).start();
    }
  };
  changeScreen = screen => {
    switch (screen) {
      case "Home":
      case "Search":
      case "Notify":
      case "Message":
    }
  };
  onPress = () => {
    let { navigate } = this.props.navigation;
    navigate("DrawerOpen");
  };
  render() {
    return (
      <View style={{ flex: 1, width: "100%", backgroundColor: color.white }}>
        <Animated.View style={[header.top, { height: this.state.heightAni }]}>
          <TouchableOpacity
            style={header.icon}
            onPress={this.onPress}
          >
            <FontAwesome name="bars" size={26} color={color.blue} />
          </TouchableOpacity>
          {this.state.screen}
        </Animated.View>
        <TabBarHeader screenProps={{ scroll: this.scroll }} />
      </View>
    );
  }
}
export default App;
