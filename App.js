import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Nav from "./components/navigation/Nav";
import Header from "./components/header/Header";
import Appointments from "./components/main/Appointments";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
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
    </NavigationContainer>
  );
}
