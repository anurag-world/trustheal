import { StatusBar } from "expo-status-bar";
import Navigator from "./navigation/Navigator";
import HomeNavigator from "./navigation/HomeNavigator";

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#fff" style="dark" />
      <HomeNavigator />
    </>
  );
}
