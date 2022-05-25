import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import AboutScreen from "./src/screens/AboutScreen";
import CounterScreen from "./src/screens/CounterScreen";
import HomeScreen from "./src/screens/HomeScreen";
import ImagesScreen from "./src/screens/ImagesScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    About: AboutScreen,
    Images: ImagesScreen,
    Counter: CounterScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
