import { PaperProvider } from "react-native-paper";
import Login from "./screens/Login";
import UserProvider from "./utils/GetUser";

export default function App() {
  return (
    <UserProvider>
      <PaperProvider>
        <Login />
      </PaperProvider>
    </UserProvider>
  );
}
