import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./components/HomeScreen.js";
import SettingsScreen from "./components/SettingsScreen";
import EventsScreen from "./components/EventsScreen";
import { FontAwesome } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            //Set the icon based on which route it is (name of the tab)
            if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "Events") {
              iconName = "list";
            } else if (route.name === "Settings") {
              iconName = focused ? "user" : "user-o";
            }

            // You can return any component that you like here!
            return <FontAwesome name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "red",
          tabBarInactiveTintColor: "gray"
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Events" component={EventsScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
