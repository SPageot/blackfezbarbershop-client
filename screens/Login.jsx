import { useNavigation } from "@react-navigation/core";
import React, { useContext, useState } from "react";
import { SafeAreaView, View, Pressable, Text } from "react-native";
import styled from "styled-components";
import { UserStateContext } from "../util/getUser";
import {
  BrandContainer,
  BrandImage,
  ButtonContainer,
  ButtonText,
  FormContainer,
  FormInput,
  FormLabel,
} from "../util/globalComponents";

const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #ebebeb;
  justify-content: center;
  align-items: center;
`;

const RegisteredContainer = styled(Pressable)`
  width: 100%;
  background-color: green;
  align-items: center;
  padding: 10px;
`;

const ErrorContainer = styled(Pressable)`
  width: 100%;
  background-color: red;
  align-items: center;
  padding: 10px;
`;

const Feedback = styled(Text)`
  color: #fff;
  font-size: 20px;
`;

const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const { login, isRegistered, errorMessage } = useContext(UserStateContext);
  const navigation = useNavigation();

  const onUserNameChange = (value) => {
    setUsername(value);
  };

  const onPasswordChange = (value) => {
    setPassword(value);
  };

  const onSubmit = async () => {
    if (username && password) {
      await fetch("http://127.0.0.1:8000/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      })
        .then((response) => response.json())
        .then((user) => login(user));
    }
  };

  return (
    <Container>
      {errorMessage ? (
        <ErrorContainer>
          <Feedback>{errorMessage}</Feedback>
        </ErrorContainer>
      ) : null}
      {isRegistered ? (
        <RegisteredContainer>
          <Feedback>Registered Successfully! Please Log In!</Feedback>
        </RegisteredContainer>
      ) : null}
      <BrandContainer>
        <BrandImage source={require("../assets/logo.jpg")} />
      </BrandContainer>
      <FormContainer>
        <FormLabel>Username</FormLabel>
        <FormInput value={username} onChangeText={onUserNameChange} />
        <FormLabel>Password</FormLabel>
        <FormInput
          secureTextEntry
          value={password}
          onChangeText={onPasswordChange}
        />
      </FormContainer>
      <ButtonContainer onPress={onSubmit}>
        <ButtonText>Log In</ButtonText>
      </ButtonContainer>
      <ButtonContainer onPress={() => navigation.navigate("SignUp")}>
        <ButtonText>Sign Up</ButtonText>
      </ButtonContainer>
    </Container>
  );
};

export default Login;
