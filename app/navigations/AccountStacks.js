import { createStackNavigator } from "react-navigation-stack";
import AccountScreen from "../screens/Account/MyAccount";
import LoginScreen from "../screens/Account/Login";

const AccountScreenStacks = createStackNavigator({
  Restaurants: {
    screen: AccountScreen,
    navigationOptions: () => ({
      title: "Accounts"
    })
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: () => ({
      title: "Login"
    })
  }
});

export default AccountScreenStacks;
