import React from "react";
import { Icon } from "react-native-elements";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import RestaurantsScreenStacks from "./RestaurantsStacks";
import TopListsScreenStacks from "./TopListsStacks";

const NavigationStacks = createBottomTabNavigator({
  Restaurants: {
    screen: RestaurantsScreenStacks,
    navigationOptions: () => ({
      tabBarLabel: "Restaurantes",
      tabBarIcon: ({ tintColor }) => (
        <Icon
          type="material-community"
          name="compass-outline"
          size={22}
          color={tintColor}
        />
      )
    })
  },
  TopLists: {
    screen: TopListsScreenStacks,
    navigationOptions: () => ({
      tabBarLabel: "Ranking",
      tabBarIcon: ({ tintColor }) => (
        <Icon
          type="material-community"
          name="star-outline"
          size={22}
          color={tintColor}
        />
      )
    })
  }
});

export default createAppContainer(NavigationStacks);
