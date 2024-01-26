import { Card, Text, Button, Avatar } from "react-native-paper";
import brandLogo from "../../assets/logo.png";
import { cardStyles } from "./loginStyles";

const Container = ({ children }) => {
  return (
    <Card style={cardStyles.cardContainer} contentStyle={cardStyles.container}>
      <Avatar.Image size={100} source={brandLogo} />
      {children}
    </Card>
  );
};

export default Container;
