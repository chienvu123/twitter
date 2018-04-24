import React, { Component } from "react";
import {
  View,
} from "react-native";
import { color, header, drawer } from "./styles";
import {
  StackNavigator,
  TabNavigator,
  DrawerNavigator,
} from "react-navigation";
import Signup from "../Welcome/Signup";
import CustomComponent from './Navigator/CustomComponent';
import {Profile, Bookmarks, Moment, List} from '../Component/DrawerComponent/DrawerComponent';
import Tabbar from './Navigator/Tabbar';

const StackComponent = StackNavigator(
  {
    Profile: {
      screen: props => <Profile {...props}/>
    },
    List: {
      screen: List
    },
    Bookmark: {
      screen: Bookmarks
    },
    Moment: {
      screen: Moment
    },
  },{
    headerMode: 'none'
  });
  const DrawerComponent = DrawerNavigator(
    {
      Tabbar: {
        screen: Tabbar
      },
      StackComponent: {
        screen: StackComponent
      }
    },
    {
      initialRouteName: 'Tabbar',
      drawerWidth: 300,
      drawerPosition: "left",
      drawerOpenRoute: "DrawerOpen",
      drawerCloseRoute: "DrawerClose",
      drawerToggleRoute: "DrawerToggle",
      contentComponent: CustomComponent,
      contentOptions: {
        activeTintColor: color.blue,
        inactiveTintColor: color.grey,
        iconContainerStyle: {
          width: 50,
          height: 50,
          justifyContent: "center",
          paddingLeft: 5,
          marginLeft: 0,
          marginRight: 0
        },
        itemsContainerStyle: {
          borderBottomWidth: 1,
          borderBottomColor: "grey",
          marginLeft: 0
        }
      }
    }
  );

const Stack = StackNavigator(
  {
    Signup: {
      screen: Signup
    },
    Drawer: {
      screen: DrawerComponent
    }
  },
  {
    headerMode: 'none'
  }
)
export {DrawerComponent}
export default Stack;
