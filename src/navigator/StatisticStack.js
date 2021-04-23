import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Statistic from "../screens/Statistic";

const Stack = createStackNavigator();

export default function StatisticStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      mode="modal"
    >
      <Stack.Screen name="Statistic" component={Statistic} />
    </Stack.Navigator>
  );
}
