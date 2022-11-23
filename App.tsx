import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";
import ResultDetailScreen from "./src/screens/ResultDetailScreen";
import FavoritesScreen from "./src/screens/FavoritesScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import MainContainer from "./src/navigation/MainContainer";

/* const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    ResultDetail: ResultDetailScreen,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Businiess Search",
    },
  }
);

const Tab = createBottomTabNavigator();

export default createAppContainer(navigator); */

function App() {
  return <MainContainer />;
}

export default App;
