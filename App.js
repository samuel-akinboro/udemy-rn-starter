import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import AboutScreen from "./src/screens/AboutScreen";
import ColorScreen from "./src/screens/ColorScreen";
import CounterScreen from "./src/screens/CounterScreen";
import HomeScreen from "./src/screens/HomeScreen";
import ImagesScreen from "./src/screens/ImagesScreen";
import TextScreen from "./src/screens/TextScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    About: AboutScreen,
    Images: ImagesScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    Text: TextScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
