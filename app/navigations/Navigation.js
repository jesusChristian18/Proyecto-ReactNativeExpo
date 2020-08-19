import React from "react";
import {NavigationContainer} from "@react-navigation/native";

import RestaurantsStack from "./RestaurantsStack";
import FavoritesStack from "./FavoritesStack";
import TopRestaurantsStack from "./TopRestaurantsStack";
import SearchStack from "./SearchStack";
import AccountsStack from "./AccountsStack";
import Restaurants from "../screens/Restaurants";
import Favorites from "../screens/Favorites";
import TopRestaurants from "../screens/TopRestaurants";
import Search from "../screens/Search";
import Account from "../screens/Account/Account";
import { Icon } from 'react-native-elements'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();



export default function Navigation(){
    return(
      <NavigationContainer>
           <Tab.Navigator
        initialRouteName="restaurants"
        tabBarOptions={{
          inactiveTintColor: "#646464",
          activeTintColor: "#00a680",
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => screenOptions(route, color),
        })}
      >

              <Tab.Screen name = "restaurants" 
              component={RestaurantsStack}
              options={{title: "Restaurantes"}}/>

              <Tab.Screen name = "favorites" 
              component={FavoritesStack}
              options={{title: "Favoritos"}}/>

              <Tab.Screen name = "top-restaurants" 
              component={TopRestaurantsStack}
              options={{title: "Top 5"}}/>      

              <Tab.Screen name = "search" 
              component={SearchStack}
              options={{title: "Buscar"}}/>

              <Tab.Screen name = "account" 
              component={AccountsStack}
              options={{title: "Cuenta"}}/>        
          </Tab.Navigator>
      </NavigationContainer>
    );
}

function screenOptions(route, color) {
    let iconName;
  
    switch (route.name) {
      case "restaurants":
        iconName = "silverware-fork-knife";
        break;
      case "favorites":
        iconName = "cards-heart";
        break;
      case "top-restaurants":
        iconName = "star-face";
        break;
      case "search":
        iconName = "magnify";
        break;
      case "account":
        iconName = "account-circle";
        break;
      default:
        break;
    }
    return (
      <Icon type="material-community" name={iconName} size={22} color={color} />
    );
  }