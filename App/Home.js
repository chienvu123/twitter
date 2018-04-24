import React, { Component } from "react";
import {
  Image,
  FlatList,
} from "react-native";
import { home, width, height } from "./styles";
import { data } from "../data";
import TweetItem from "../Component/TweetItem";
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      begin: 0,
      end: 0
    };
  }
  static navigationOptions = ({ navigation }) => ({
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require("../image/TabBar/house.png")}
        style={{
          width: width.smaller,
          height: height.smaller,
          tintColor: tintColor
        }}
      />
    ),
    tabBarLabel: "Home"
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
  renderItem = ({ item }, index) => {
    return <TweetItem item={item} key={index} />;
  };
  render() {
    return (
      <FlatList
      onScrollBeginDrag={this.begin}
      onScrollEndDrag={this.end}
        style={home.container}
        showsVerticalScrollIndicator={false}
        data={data}
        keyExtractor={(item, index) => item.id+""}
        renderItem={this.renderItem}
      />
    );
  }
}
