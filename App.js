/* eslint-disable react/style-prop-object */
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import HomeNavigator from './navigation/HomeNavigator';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#fff" style="dark" />
      <HomeNavigator />
    </>
  );
}
