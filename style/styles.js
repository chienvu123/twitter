import { StyleSheet } from "react-native";
import { color } from "./color";
import { width, height, device, fontSize } from "./size";
const welcome = StyleSheet.create({
  container: {
    flex: 1,
    width: "80%",
    marginLeft: "10%"
  },
  logo: {
    marginTop: 15,
    paddingTop: 15,
    flex: 1,
    width: "100%",
    justifyContent: "flex-end"
  },
  mid: {
    flex: 5.5,
    width: "100%",
    justifyContent: "center"
  },
  txtLogo: {
    color: color.black,
    fontSize: fontSize.h1,
    fontWeight: "bold"
  },

  button: {
    marginTop: 30,
    backgroundColor: color.blue,
    height: 46,
    borderRadius: 23,
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  btnText: {
    color: color.white,
    fontSize: fontSize.h3,
    fontWeight: "bold"
  },
  bot: {
    flex: 1,
    flexDirection: "row",
    width: "100%"
  }
});
const signup1 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white
  },
  top: {
    flex: 8.5,
    width: "80%",
    marginLeft: "10%"
  },
  vInput: {
    width: "100%",
    marginTop: 20
  },
  input: {
    fontSize: fontSize.h4,
    paddingLeft: 10,
    height: 50,
    width: '100%'
  },
  check: {
    position: "absolute",
    width: width.smaller,
    height: height.smaller,
    zIndex: 2,
    top: 14,
    bottom: 0,
    right: 0,
    left: "90%"
  },
  vError: {
    height: 26,
    width: "100%",
    paddingLeft: 10
  },
  containerBot: {
    height: 51,
    width: "100%"
  },
  border: {
    height: 1,
    width: "100%",
    backgroundColor: "grey",
    opacity: 0.2,
    position: 'absolute',
    zIndex: 4,
  },
  bot: {
    height: 50,
    width: "100%",
    flexDirection: "row",
    alignItems: "center"
  },
  btnEmail: {
    flex: 8,
    marginLeft: 10,
    height: "100%",
    justifyContent: "center"
  },
  btnNext: {
    flex: 2,
    height: 32,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: color.blue
  },
  btnText: {
    fontWeight: "bold",
    color: color.white,
    padding: 6
  }
});
const signup2 = StyleSheet.create({
  container: {
    flex: 1,
    width: "80%",
    marginTop: 10,
    marginLeft: "10%"
  },
  top: {
    flex: 3,
    width: "100%"
  },
  slogan: {
    color: color.black,
    fontWeight: "bold",
    fontSize: fontSize.h0,
    marginBottom: 10
  },
  btnInput: {
    height: 50,
    width: "100%",
    marginTop: 10,
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: color.grey
  },
  bot: {
    flex: 2,
    marginTop: 15,
    width: "100%",
    marginBottom: 26
  },
  button: {
    marginTop: 30,
    backgroundColor: color.blue,
    height: height.bigger,
    borderRadius: 23,
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  btnText: {
    color: color.white,
    fontSize: fontSize.h3,
    fontWeight: "bold"
  }
});
const login = StyleSheet.create({
  container:{
    flex: 1,
    width: '100%',
    backgroundColor: color.white
  },
  bot: {
    height: 50,
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: color.white,
    position: 'absolute',
    zIndex: 3
  },
  top: {
    flex: 8.5,
    width: "96%",
    marginLeft: '2%',
  },
  btnNext: {
    width: 130,
    height: 32,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    backgroundColor: color.blue
  },
  menu:{
    width: 40,
    height: 50,
    marginRight: 5,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  password: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  showPassword:{
    position: 'absolute',
    right: 5,
    zIndex: 2,
  },
  title: {
    fontSize: fontSize.h2,
    color: color.black,
    fontWeight: 'bold',
    marginLeft: '2%'
  },
  forgot: {
    marginTop: 15,
    width: "100%",
    alignItems: "center"
  }
});
const icon = StyleSheet.create({
  back:{
    width: width.smaller,
    height: height.smaller,
    tintColor: color.blue,
  },
  twitter:{
    width: width.bigger,
    height: height.bigger,
  }
})
const header = StyleSheet.create({
  left:{
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    position: 'absolute',
    zIndex: 2
  },
  mid: {
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  right:{
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 2,
  },
  text:{
    color: color.blue,
    fontSize: fontSize.h5,
    fontWeight: 'bold',
    marginLeft: 5,
    marginRight: 15,
  },
  menu:{
    width: 30,
    height: 50,
    tintColor: color.blue
  }
})
export { welcome, signup1, signup2, login, icon, header, color };
