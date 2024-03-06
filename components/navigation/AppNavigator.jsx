import _ from "lodash";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "../../screens/Login";
import Home from "../../screens/Home";
import Appointment from "../../screens/Appointment";
import { useUser } from "../../utils/GetUser";
import ListOfUsers from "../../screens/ListOfUsers";
import ListOfAppointments from "../../screens/ListOfAppointments";
import Profile from "../../screens/Profile";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const { user } = useUser();
  return (
    <NavigationContainer>
      {!_.isEmpty(user) && !user.isAdmin ? (
        <Tab.Navigator>
          <Tab.Screen name='Home' component={Home} />
          <Tab.Screen name='Appointment' component={Appointment} />
          <Tab.Screen name='Profile' component={Profile} />
        </Tab.Navigator>
      ) : null}

      {!_.isEmpty(user) && user.isAdmin ? (
        <Tab.Navigator>
          <Tab.Screen name='UserList' component={ListOfUsers} />
          <Tab.Screen name='AppointmentList' component={ListOfAppointments} />
        </Tab.Navigator>
      ) : null}

      {_.isEmpty(user) ? (
        <Tab.Navigator>
          <Tab.Screen
            options={{ tabBarStyle: { display: "none" } }}
            name='Login'
            component={Login}
          />
        </Tab.Navigator>
      ) : null}
    </NavigationContainer>
  );
};

export default AppNavigator;
