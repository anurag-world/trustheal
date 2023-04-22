/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Navigator from './Navigator';
import HistoryNavigator from './HistoryNavigator';

const Tab = createBottomTabNavigator();

// Tab Navigation
export default function HomeNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else {
              iconName = focused ? 'list' : 'list-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarLabel: '',
          tabBarActiveTintColor: '#000',
          tabBarInactiveTintColor: '#8E8E8E',
          tabBarLabelStyle: { fontSize: 12 },
          tabBarStyle: {
            elevation: 1,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: -5,
            },
            shadowOpacity: 0.12,
            shadowRadius: 10,
            height: Platform.OS === 'ios' ? 92 : 80,
            paddingBottom: Platform.OS === 'ios' ? 32 : 16,
            paddingTop: 12,
          },
          headerTitleAlign: 'center',
        })}
      >
        <Tab.Screen
          name="Home"
          component={Navigator}
          options={{
            headerShown: false,
            tabBarLabel: 'Home',
          }}
        />

        <Tab.Screen
          name="History"
          component={HistoryNavigator}
          options={{
            headerShown: false,
            tabBarLabel: 'History',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
