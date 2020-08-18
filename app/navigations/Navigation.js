import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import RestaurantsStack from "./RestaurantsStack";
import FavoritesStack from "./FavoritesStack";
import TopRestaurantsStack from "./TopRestaurantsStack";
import SearchStack from "./SearchStack";
import AccountsStack from "./AccountsStack";
import Restaurants from "../screens/Restaurants";
import Favorites from "../screens/Favorites";
import TopRestaurants from "../screens/TopRestaurants";
import Search from "../screens/Search";
import Account from "../screens/Account";
import { Icon } from 'react-native-elements'

const Tab = createBottomTabNavigator();



export default function Navigation(){
    return(
      <NavigationContainer>
          <Tab.Navigator
          initialRouteName="restaurant">
              <Tab.Screen name = "restaurante" 
              component={RestaurantsStack}
              options={{title: "Restaurantes"}}/>

              <Tab.Screen name = "favoritos" 
              component={FavoritesStack}
              options={{title: "Favoritos"}}/>

              <Tab.Screen name = "top-restaurante" 
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