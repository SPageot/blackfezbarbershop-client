import { useNavigation } from "@react-navigation/core";
import { useContext, useState } from "react";
import { SafeAreaView, ScrollView } from "react-native";
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

const SignUp = () => {
  const navigation = useNavigation();
  const { registered } = useContext(UserStateContext);
  const [createUser, setCreateUser] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
  });

  const onFirstNameChange = (value) => {
    setCreateUser({
      ...createUser,
      first_name: value,
    });
  };

  const onLastNameChange = (value) => {
    setCreateUser({
      ...createUser,
      last_name: value,
    });
  };

  const onUserNameChange = (value) => {
    setCreateUser({
      ...createUser,
      username: value,
    });
  };

  const onPasswordChange = (value) => {
    setCreateUser({
      ...createUser,
      password: value,
    });
  };

  const onEmailChange = (value) => {
    setCreateUser({
      ...createUser,
      email: value,
    });
  };

  const onSubmit = async () => {
    await fetch("http://127.0.0.1:8000/signup/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(createUser),
    })
      .then((response) => response.json())
      .then(() => registered());

    setCreateUser({
      first_name: "",
      last_name: "",
      username: "",
      email: "",
      password: "",
    });

    navigation.navigate("Login");
  };

  return (
    <Container>
      <ScrollView
        style={{ width: "100%" }}
        contentContainerStyle={{ alignItems: "center" }}
      >
        <BrandContainer>
          <BrandImage source={require("../assets/logo.jpg")} />
        </BrandContainer>
        <FormContainer>
          <FormLabel small>First Name</FormLabel>
          <FormInput
            value={createUser.first_name}
            onChangeText={onFirstNameChange}
          />
          <FormLabel small>Last Name</FormLabel>
          <FormInput
            value={createUser.last_name}
            onChangeText={onLastNameChange}
          />
          <FormLabel small>E-Mail</FormLabel>
          <FormInput value={createUser.email} onChangeText={onEmailChange} />
          <FormLabel small>Username</FormLabel>
          <FormInput
            small
            value={createUser.username}
            onChangeText={onUserNameChange}
          />
          <FormLabel small>Password</FormLabel>
          <FormInput
            small
            secureTextEntry
            value={createUser.password}
            onChangeText={onPasswordChange}
          />
        </FormContainer>
        <ButtonContainer onPress={onSubmit}>
          <ButtonText>Submit</ButtonText>
        </ButtonContainer>
      </ScrollView>
    </Container>
  );
};

export default SignUp;
