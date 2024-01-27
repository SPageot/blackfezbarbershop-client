import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../../screens/Login";
import Home from "../../screens/Home";
import Appointment from "../../screens/Appointment";
import { useUser } from "../../utils/GetUser";
const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const { user } = useUser();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Appointment' component={Appointment} />
          </>
        ) : (
          <Stack.Screen name='Login' component={Login} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
