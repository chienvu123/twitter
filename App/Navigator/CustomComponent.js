import React, { Component } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { color, header, drawer, fontSize } from "../styles";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { user } from "../../data";

export default class CustomComponent extends Component {
  render() {
    return (
      <ScrollView style={{ flex: 1, width: "100%" }}>
        <View style={drawer.container}>
          <TouchableOpacity
            style={drawer.vAvatar}
            onPress={() => this.props.navigation.navigate("Profile")}
          >
            <Image source={user.avatar} style={drawer.avatar} />
          </TouchableOpacity>
          <View>
            <View style={drawer.subItem}>
              <Text style={drawer.nameTitle}>{user.name}</Text>
              <TouchableOpacity
                style={{
                  flex: 2,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <FontAwesome name="chevron-down" color={color.blue} />
              </TouchableOpacity>
            </View>
            <View style={drawer.subItem}>
              <Text style={{ color: color.grey }}>@{user.name}</Text>
            </View>
          </View>
          <View style={drawer.item}>
            <Text style={{ color: color.grey, flex: 1 }}>
              <Text style={{ color: color.black, fontWeight: "bold" }}>
                {user.follow}{" "}
              </Text>
              Đang theo dõi
            </Text>
            <Text style={{ color: color.grey, flex: 1 }}>
              <Text style={{ color: color.black, fontWeight: "bold" }}>
                {user.followed}{" "}
              </Text>
              Người theo dõi
            </Text>
          </View>
        </View>
        <View style={drawer.mid}>
          <TouchableOpacity
            style={drawer.item}
            onPress={() => this.props.navigation.navigate("Profile")}
          >
            <View style={drawer.vIcon}>
              <Image
                source={require("../../image/Drawer/profile.png")}
                style={drawer.icon}
              />
            </View>
            <Text style={drawer.textItem}>Hồ sơ</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={drawer.item}
            onPress={() => this.props.navigation.navigate("List")}
          >
            <View style={drawer.vIcon}>
              <Image
                source={require("../../image/Drawer/list.png")}
                style={drawer.icon}
              />
            </View>
            <Text style={drawer.textItem}>Danh sách</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={drawer.item}
            onPress={() => this.props.navigation.navigate("Bookmark")}
          >
            <View style={drawer.vIcon}>
              <Image
                source={require("../../image/Drawer/bookmark.png")}
                style={drawer.icon}
              />
            </View>
            <Text style={drawer.textItem}>Dấu trang</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={drawer.item}
            onPress={() => this.props.navigation.navigate("Moment")}
          >
            <View style={drawer.vIcon}>
              <Image
                source={require("../../image/Drawer/flash.png")}
                style={drawer.icon}
              />
            </View>
            <Text style={drawer.textItem}>Khoảnh khắc</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            height: 60,
            width: "96%",
            marginLeft: "4%"
          }}
        >
          <Text
            style={{
              textAlignVertical: "center",
              height: 50,
              color: color.black,
              fontSize: fontSize.h35
            }}
          >
            Cài đặt và riêng tư
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            height: 60,
            width: "96%",
            marginLeft: "4%"
          }}
        >
          <Text
            style={{
              textAlignVertical: "center",
              height: 50,
              fontSize: fontSize.h35,
              color: color.black
            }}
          >
            Trung tâm Trợ giúp
          </Text>
        </TouchableOpacity>
        <View style={drawer.bot}>
          <TouchableOpacity style={drawer.botLeft}>
            <Image
              source={require("../../image/Drawer/moon.png")}
              style={drawer.botIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={drawer.botRight}>
            <Image
              source={require("../../image/Drawer/qr-code.png")}
              style={drawer.botIcon}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
