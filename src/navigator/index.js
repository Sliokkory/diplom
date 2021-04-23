import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeStack from "./HomeStack";
import ProjectsStack from "./ProjectsStack";
import CoursesStack from "./CoursesStack";
import StatisticStack from "./StatisticStack";

const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    lib: Ionicons,
    name: "ios-home",
  },
  Courses: {
    lib: Ionicons,
    name: "ios-albums",
  },
  Projects: {
    lib: Ionicons,
    name: "ios-folder",
  },
  Statistic: {
    lib: Ionicons,
    name: "code-slash",
  },
};

export default function Navigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route, navigation }) => ({
          headerShown: false,
        })}
        tabBarOptions={{
          activeTintColor: "#4775f2",
          inactiveTintColor: "#ccc",
        }}
        mode="modal"
      >
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            title: "Главная",
            tabBarIcon: ({ color, size, focused }) => {
              return <Ionicons name="ios-home" size={size} color={color} />;
            },
          }}
        />
        <Tab.Screen
          name="CoursesStack"
          component={CoursesStack}
          options={{
            title: "Тестирование",
            tabBarIcon: ({ color, size, focused }) => {
              return <Ionicons name="ios-albums" size={size} color={color} />;
            },
          }}
        />
        <Tab.Screen
          name="ProjectsStack"
          component={ProjectsStack}
          options={{
            title: "Рекомендации",
            tabBarIcon: ({ color, size, focused }) => {
              return <Ionicons name="ios-folder" size={size} color={color} />;
            },
          }}
        />
        <Tab.Screen
          name="StatisticStack"
          component={StatisticStack}
          options={{
            title: "Результаты",
            tabBarIcon: ({ color, size, focused }) => {
              return <Ionicons name="ios-code" size={size} color={color} />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
