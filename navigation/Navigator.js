import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ConsultScreen from "../src/screens/consultation/ConsultScreen";
import HomeScreen from "../src/screens/HomeScreen";

const Stack = createNativeStackNavigator();

// Stack Navigation for HomeScreen
export default function Navigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTitleAlign: "center",
        contentStyle: {
          backgroundColor: "#fff",
        },
      }}
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerTitle: "Home",
          gestureEnabled: false,
        }}
      />

      {/* Consultion Screens */}
      <Stack.Screen
        name="ConsultScreen"
        component={ConsultScreen}
        options={{
          headerTitle: "Upcoming",
        }}
      />
    </Stack.Navigator>
  );
}
