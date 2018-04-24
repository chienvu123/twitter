import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity
} from "react-native";
import {NavigationActions} from 'react-navigation'
import { color } from "../../style/color";
import { width, height, fontSize, size } from "../../style/size";
import { user } from "../../data";
import FeatherIcon from "react-native-vector-icons/Feather";
export default class Profile extends Component {
  render() {
    console.log("Profile");
    console.log(this.props);
    return (
      <ScrollView style={styles.container}>
        <TouchableOpacity
          style={styles.back}
          onPress={() => {
            const action = NavigationActions.back({ key: "Tabbar" });
            this.props.navigation.dispatch(action);
          }}
        >
          <FeatherIcon name="arrow-left" size={24} color={color.white} />
        </TouchableOpacity>
        <View style={styles.background} />
        <View style={styles.vAvatar}>
          <Image source={user.avatar} style={styles.avatar} />
        </View>
        <View style={styles.info}>
          <View style={styles.vSetProfile}>
            <TouchableOpacity style={styles.setProfile}>
              <Text
                style={{
                  color: color.black,
                  padding: 5,
                  paddingLeft: 16,
                  paddingRight: 16,
                  fontWeight: "bold"
                }}
              >
                Thiết lập hồ sơ
              </Text>
            </TouchableOpacity>
          </View>
          <Text
            style={{
              fontSize: fontSize.h3,
              color: color.black,
              fontWeight: "bold"
            }}
          >
            {user.name}
          </Text>
          <Text style={{ lineHeight: 20, alignItems: "center" }}>{`@${
            user.name
          }`}</Text>
          <View style={styles.follow}>
            <Text style={{ flex: 1 }}>
              <Text style={{ color: color.black, fontWeight: "bold" }}>
                {user.follow}{" "}
              </Text>
              Đang theo dõi
            </Text>
            <Text style={{ flex: 1 }}>
              <Text style={{ color: color.black, fontWeight: "bold" }}>
                {user.followed}{" "}
              </Text>
              Người theo dõi
            </Text>
          </View>
        </View>
        <View style={{ marginTop: 6, backgroundColor: color.white }}>
          <ScrollView
            style={styles.nav}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <Text style={styles.navItem}>Tweet</Text>
            <Text style={[styles.navItem, { width: 134 }]}>
              Tweet & trả lời
            </Text>
            <Text style={[styles.navItem, { width: 110 }]}>Phương tiện</Text>
            <Text style={[styles.navItem, { width: 110 }]}>Lượt thích</Text>
          </ScrollView>
        </View>
        <View
          style={{ height: 500, width: "100%", backgroundColor: color.white }}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: color.grey1
  },
  background: {
    height: 100,
    width: "100%",
    backgroundColor: color.blue
  },
  back: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: color.cyan,
    position: "absolute",
    zIndex: 6,
    top: 15,
    left: 15
  },
  vAvatar: {
    position: "absolute",
    zIndex: 5,
    top: 70,
    left: 10,
    width: 86,
    height: 86,
    borderRadius: 43,
    backgroundColor: color.white,
    alignItems: "center",
    justifyContent: "center"
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40
  },
  info: {
    height: 150,
    width: "100%",
    paddingLeft: 10,
    backgroundColor: color.white
  },
  vSetProfile: {
    alignItems: "flex-end",
    justifyContent: "center",
    width: "100%",
    height: 50
  },
  setProfile: {
    borderRadius: 18,
    borderColor: color.black,
    borderWidth: 1,
    marginRight: 10
  },
  follow: {
    height: 40,
    width: "100%",
    flexDirection: "row",
    alignItems: "center"
  },
  nav: {
    flexDirection: "row",
    marginLeft: 2,
    borderBottomColor: color.grey,
    borderBottomWidth: 1
  },
  navItem: {
    width: 66,
    lineHeight: 36,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center"
  }
});
