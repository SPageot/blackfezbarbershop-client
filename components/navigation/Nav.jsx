import { SafeAreaView, Text } from "react-native";
import React, { useContext } from "react";
import styled from "styled-components";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/core";
import { UserStateContext } from "../../util/getUser";

const Container = styled(SafeAreaView)`
  flex-direction: row;
  flex: 0.13;
  background-color: #404040;
  justify-content: space-evenly;
  align-items: center;
`;

const Nav = () => {
  const navigation = useNavigation();
  const { logout } = useContext(UserStateContext);
  return (
    <Container>
      <Icon
        name="home"
        size={40}
        color="#fff"
        onPress={() => navigation.navigate("Home")}
      />
      <Icon
        name="calendar"
        size={35}
        color="#fff"
        onPress={() => navigation.navigate("Appointments")}
      />
      <Icon
        name="power-off"
        size={35}
        color="#fff"
        onPress={() => logout("Login")}
      />
    </Container>
  );
};

export default Nav;
