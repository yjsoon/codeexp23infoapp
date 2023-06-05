import * as React from "react";
import { Text, View, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

function EventsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Events!</Text>
      <Button
        onPress={() => {
          navigation.navigate("Events Page 2");
        }}
        title="Go to next screen"
      />
    </View>
  );
}

function EventsScreen2() {
  return <Text>Hello! This is the second screen!!!!!</Text>;
}

const Stack = createStackNavigator();

export default function EventsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Events Home" component={EventsScreen} />
      <Stack.Screen name="Events Page 2" component={EventsScreen2} />
    </Stack.Navigator>
  );
}
