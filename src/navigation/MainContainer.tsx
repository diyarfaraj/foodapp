import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FavoritesScreen from "../screens/FavoritesScreen";
import SearchScreen from "../screens/SearchScreen";
import Ionicons from "react-native-vector-icons/";
import { Feather } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";
import ResultDetailScreen from "../screens/ResultDetailScreen";

//Screen names
const search = "Search";
const favorites = "Favorite";

const SearchStack = createNativeStackNavigator();
const SearchStackScreen = () => (
  <SearchStack.Navigator>
    <SearchStack.Screen
      options={{ headerShown: false }}
      name={search}
      component={SearchScreen}
    />
    <SearchStack.Screen name={"ResultDetail"} component={ResultDetailScreen} />
  </SearchStack.Navigator>
);
const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={search}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === search) {
              iconName = focused ? "search" : "search";
            } else if (rn === favorites) {
              iconName = focused ? "heart" : "heart";
            }

            // You can return any component that you like here!
            // return <Ionicons name={iconName} size={size} color={color} />;
            return <Feather name={iconName} size={17} />;
          },
        })}
        /*   tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "grey",
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70 },
        }} */
      >
        <Tab.Screen name={search} component={SearchStackScreen} />
        <Tab.Screen name={favorites} component={FavoritesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;
