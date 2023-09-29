import { SafeAreaView, Text } from "react-native";
import React from "react";
import styled from "styled-components";
import Header from "../components/header/Header";
import Appointments from "../components/main/Appointments";

const Container = styled(SafeAreaView)`
  flex: 1;
`;

const Home = () => {
  return (
    <Container>
      <Appointments />
    </Container>
  );
};

export default Home;
