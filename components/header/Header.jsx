import { SafeAreaView, Text, Image } from "react-native";
import React from "react";
import styled from "styled-components";

const Container = styled(SafeAreaView)`
  background-color: #ebebeb;
  flex-direction: row;
  justify-content: center;
  flex: 0.07;
`;

const BrandImage = styled(Image)`
  height: 40px;
  width: 40px;
`;

const Header = () => {
  return (
    <Container>
      <BrandImage source={require("../../assets/logo.jpg")} />
    </Container>
  );
};

export default Header;
