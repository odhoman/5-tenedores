import { createStackNavigator } from "react-navigation-stack";
import TopRestaurantsScreen from "../screens/TopRestaurants";

const TopRestaurantsScreenStacks = createStackNavigator({
  Restaurants: {
    screen: TopRestaurantsScreen,
    navigationOptions: () => ({
      title: "Top Restaurants"
    })
  }
});

export default TopRestaurantsScreenStacks;
