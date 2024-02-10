import { Card, Text } from "react-native-paper";

const Container = ({ children }) => {
  return (
    <Card
      style={{ margin: 10, padding: 15 }}
      contentStyle={{
        width: "80%",
        height: 150,
        justifyContent: "space-evenly",
      }}
    >
      {children}
    </Card>
  );
};

export default Container;
