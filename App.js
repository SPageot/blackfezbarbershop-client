import { PaperProvider } from "react-native-paper";
import UserProvider from "./utils/GetUser";
import AppNavigator from "./components/navigation/AppNavigator";
import { AppRegistry } from "react-native";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:3001/graphql",
  cache: new InMemoryCache({
    addTypename: false,
  }),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <UserProvider>
        <PaperProvider>
          <AppNavigator />
        </PaperProvider>
      </UserProvider>
    </ApolloProvider>
  );
}

AppRegistry.registerComponent("MyApplication", () => App);
