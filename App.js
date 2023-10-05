import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Nav from "./components/navigation/Nav";
import Header from "./components/header/Header";
import Appointments from "./components/main/Appointments";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import UserStateProvider from "./util/getUser";
import { useState } from "react";

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState();

  return (
    <UserStateProvider setUser={setUser} user={user}>
      <NavigationContainer>
        {!user ? (
          <>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}
            >
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="SignUp" component={SignUp} />
            </Stack.Navigator>
          </>
        ) : (
          <>
            <Header />
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}
            >
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Appointments" component={Appointments} />
            </Stack.Navigator>
            <Nav />
          </>
        )}
      </NavigationContainer>
    </UserStateProvider>
  );
}
