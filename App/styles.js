import { StyleSheet } from "react-native";
import { width, height, fontSize, image } from "../style/size";
import { color } from "../style/color";
const header = StyleSheet.create({
  container: {
    width: "100%",
    elevation: 1,
    borderBottomColor: color.grey,
    borderBottomWidth: 1
  },
  top: {
    backgroundColor: color.white,
    width: "100%",
    flexDirection: "row",
    alignItems: "center"
  },
  tabBar: {
    marginTop: 15,
    flexDirection: "row",
    backgroundColor: "yellow"
  },
  icon: {
    height: "100%",
    width: 60,
    alignItems: "center",
    justifyContent: "center"
  },
  notify: {
    width: 14,
    height: 14,
    backgroundColor: color.blue,
    borderRadius: 7,
    position: "absolute",
    zIndex: 99,
    justifyContent: "center",
    alignItems: "center",
    left: 12,
    top: 0
  }
});
const home = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%"
  },
  image: {
    width: image.width,
    height: image.height,
    backgroundColor: "black"
  },
  item: {
    width: "100%",
    borderBottomColor: color.grey,
    borderBottomWidth: 1,
    paddingTop: 10,
    flexDirection: "row"
  },
  itemLeft: {
    height: "100%",
    flex: 1,
    alignItems: "center"
  },
  itemRight: {
    flex: 5
  },
  itemViewImage: {
    borderRadius: 3,
    width: "95%"
  },
  itemImage: {
    width: "100%",
    height: 49,
    marginLeft: 2,
    marginTop: 2
  },
  vTitle: {
    width: "95%",
    height: 100,
    marginTop: 10,
    flexWrap: "wrap",
  },
  itemTitle: {
    color: color.black,
    width: "100%",
    lineHeight: 30
  },
  itemRightBot: {
    marginTop: 10,
    height: 20,
    flexDirection: "row",
    marginBottom: 10,
  },
  rightBotIcon: {
    height: "100%",
    width: 60,
    flexDirection: "row",
    marginRight: 20,
    alignItems: 'center',
  }
});
const drawer = StyleSheet.create({
  container: {
    marginLeft: "4%",
    height: 200,
    width: "96%"
  },
  vAvatar: {
    height: 94,
    width: "100%",
    justifyContent: "center"
  },
  avatar: {
    width: 66,
    height: 66,
    borderRadius: 33
  },
  nameTitle: {
    fontSize: fontSize.h4,
    color: color.black,
    fontWeight: "bold",
    flex: 8
  },
  mid: {
    width: "100%",
    borderTopColor: color.grey,
    borderTopWidth: 1,
    borderBottomColor: color.grey,
    borderBottomWidth: 1
  },
  item: {
    height: 60,
    width: "100%",
    flexDirection: "row",
    alignItems: "center"
  },
  subItem: {
    height: 26,
    width: "100%",
    flexDirection: "row"
  },
  vIcon: {
    width: 60,
    height: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  icon: {
    width: 22,
    height: 22
  },
  textItem: {
    lineHeight: 50,
    fontSize: fontSize.h35,
    alignItems: "center",
    color: color.black
  },
  bot: {
    height: 56,
    width: "100%",
    flexDirection: "row",
    borderTopColor: color.grey,
    borderTopWidth: 1,
    alignItems: "center"
  },
  botLeft: {
    position: "absolute",
    left: 0,
    height: "100%",
    width: 80,
    alignItems: "center",
    justifyContent: "center"
  },
  botRight: {
    position: "absolute",
    right: 0,
    height: "100%",
    width: 80,
    alignItems: "center",
    justifyContent: "center"
  },
  botIcon: {
    width: 24,
    height: 24,
    tintColor: color.blue
  }
});
export { color, header, home, image, drawer, fontSize, width, height };
