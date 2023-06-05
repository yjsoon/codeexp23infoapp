import * as React from "react";
import { Text, View } from "react-native";
import { Title, Button } from "react-native-paper";
import { createStackNavigator } from "@react-navigation/stack";

function EventsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Title>Events!</Title>
      <Button
        onPress={() => {
          navigation.navigate("Events Page 2");
        }}
        icon="camera"
        mode="contained">
        Go to next screen
      </Button>
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
