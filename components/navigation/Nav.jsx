import { SafeAreaView, Text } from "react-native";
import React from "react";
import styled from "styled-components";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/core";

const Container = styled(SafeAreaView)`
  flex-direction: row;
  flex: 0.13;
  background-color: #404040;
  justify-content: space-evenly;
  align-items: center;
`;

const Nav = () => {
  const navigation = useNavigation();
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
    </Container>
  );
};

export default Nav;
