import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, StatusBar } from "react-native";

import Home from "./screens/Home";
import AllApp from "./screens/AllApp";
import Gold from "./screens/Gold";
import Game from "./screens/Game";
import Profile from "./screens/Profile";

import { DUMMY_ICONS } from "./data/DUMMY";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused }) => {
              const icon = focused
                ? DUMMY_ICONS[route.name].active
                : DUMMY_ICONS[route.name].inactive;

              return (
                <Image
                  source={icon}
                  style={{ width: 22, height: 22 }}
                />
              );
            },
            tabBarActiveTintColor: "#2563EB",
            tabBarInactiveTintColor: "#9CA3AF",
            tabBarStyle: { height: 60, paddingBottom: 6 },
            tabBarLabelStyle: { fontSize: 12 },
          })}
        >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="AllApp" component={AllApp} />
          <Tab.Screen name="Gold" component={Gold} />
          <Tab.Screen name="Game" component={Game} />
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
