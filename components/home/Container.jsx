import { Card, Text } from "react-native-paper";

const Container = ({ children }) => {
  return <Card style={{ padding: 15, width: "70%" }}>{children}</Card>;
};

export default Container;
