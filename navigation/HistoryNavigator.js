import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HistoryScreen from '../src/screens/HistoryScreen';

const Stack = createNativeStackNavigator();

// History Stack Navigation
export default function HistoryNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTitleAlign: 'center',
        contentStyle: {
          backgroundColor: '#fff',
        },
      }}
    >
      <Stack.Screen
        name="HistoryScreen"
        component={HistoryScreen}
        options={{
          headerTitle: 'History',
        }}
      />
    </Stack.Navigator>
  );
}
