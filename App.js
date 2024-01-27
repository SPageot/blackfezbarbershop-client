import { PaperProvider } from "react-native-paper";
import UserProvider from "./utils/GetUser";
import AppNavigator from "./components/navigation/AppNavigator";

export default function App() {
  return (
    <UserProvider>
      <PaperProvider>
        <AppNavigator />
      </PaperProvider>
    </UserProvider>
  );
}
