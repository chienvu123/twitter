import React, { Component } from "react";
import {
  Text,
  View,
  Image,
} from "react-native";
import { home, color, fontSize, image } from "../App/styles";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default class TweetItem extends Component {
  render() {
    const item = this.props.item;
    var name = item.user.name;
    var subName = name.replace(/ /g, "");
    if (item.time < 60) {
      var time = `${item.time} phút`;
    } else {
      var hours = item.time / 60;
      if (hours < 24) {
        var time = Math.floor(hours) + "giờ";
      } else {
        var day = hours / 24;
        var time = Math.floor(day) + "ngày";
      }
    }
    var arrImage = item.image;
    return (
      <View style={home.item}>
        <View style={home.itemLeft}>
          <Image
            source={item.user.avatar}
            style={{
              width: image.item.size,
              height: image.item.size,
              borderRadius: image.item.size
            }}
          />
        </View>
        <View style={home.itemRight}>
          <View style={{ padding: 5, width: "100%", flexDirection: "row" }}>
            <View
              style={{
                flexWrap: "wrap",
                width: "70%",
                flexDirection: "row",
              }}
            >
              <Text
                style={{ fontWeight: "bold", color: color.black }}
                numberOfLines={1}
              >
                {name}
                {"  "}
              </Text>
              <Text>{`@${subName}`}</Text>
            </View>
            <Text style={{ padding: 10, textAlignVertical: "center" }}>.</Text>
            <Text >{time}</Text>
          </View>
          <View style={home.vTitle}>
            <Text style={home.itemTitle} numberOfLines={3}>
              {item.title}
            </Text>
          </View>
          <View style={home.itemViewImage}>
            {arrImage.image.map(image => (
              <Image
                source={image.image}
                style={home.itemImage}
                key={image.id}
              />
            ))}
            <Text>{image.title}</Text>
          </View>
          <View style={home.itemRightBot}>
            <View style={home.rightBotIcon}>
              <FontAwesome name="comment" size={16} color={color.grey} />
              <Text style={{ marginLeft: 5, fontSize: fontSize.h7 }}>
                {item.comment.length}
              </Text>
            </View>
            <View style={home.rightBotIcon}>
              <FontAwesome name="retweet" size={16} color={color.grey} />
              <Text style={{ marginLeft: 5, fontSize: fontSize.h7 }}>100</Text>
            </View>
            <View style={home.rightBotIcon}>
              <FontAwesome name="heart" size={16} color={color.grey} />
              <Text style={{ marginLeft: 5, fontSize: fontSize.h7 }}>100</Text>
            </View>
            <View style={home.rightBotIcon}>
              <FontAwesome name="share-alt" size={16} color={color.grey} />
            </View>
          </View>
        </View>
      </View>
    );
  }
}
