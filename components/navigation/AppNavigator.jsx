import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "../../screens/Login";
import Home from "../../screens/Home";
import Appointment from "../../screens/Appointment";
import { useUser } from "../../utils/GetUser";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const { user } = useUser();

  return (
    <NavigationContainer>
      {user ? (
        <Tab.Navigator>
          <Tab.Screen name='Home' component={Home} />
          <Tab.Screen name='Appointment' component={Appointment} />
        </Tab.Navigator>
      ) : (
        <Tab.Navigator>
          <Tab.Screen
            options={{ tabBarStyle: { display: "none" } }}
            name='Login'
            component={Login}
          />
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
};

export default AppNavigator;
