import { View, Text, TextInput, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components";

const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #ebebeb;
  justify-content: center;
  align-items: center;
`;

const BrandContainer = styled(View)`
  background-color: #ebebeb;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

const BrandImage = styled(Image)`
  height: 200px;
  width: 200px;
`;

const LoginFormContainer = styled(View)`
  gap: 30px;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 50px;
  width: 100%;
`;

const FormInput = styled(TextInput)`
  width: 80%;
  border: 2px solid #000;
  height: 40px;
  color: #ebebeb;
  padding: 5px;
`;

const FormLabel = styled(Text)`
  font-size: 30px;
  color: #000;
`;

const Login = () => {
  return (
    <Container>
      <BrandContainer>
        <BrandImage source={require("../assets/logo.jpg")} />
      </BrandContainer>
      <LoginFormContainer>
        <FormLabel>Username</FormLabel>
        <FormInput />
        <FormLabel>Password</FormLabel>
        <FormInput />
      </LoginFormContainer>
    </Container>
  );
};

export default Login;
