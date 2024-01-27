import React from "react";
import { Text, TextInput } from "react-native-paper";
import { cardStyles } from "./loginStyles";
import { loginText, signUptext } from "./loginText";

const UserInput = ({
  register = false,
  forgotPassword,
  onChangeUserName,
  username,
  onChangePassword,
  password,
  onChangeFirstName,
  firstName,
  onChangeLastName,
  lastName,
  onChangeEmail,
  email,
}) => {
  return register ? (
    <>
      <Text variant="bodyMedium">{signUptext.firstName}</Text>
      <TextInput
        value={firstName}
        onChangeText={onChangeFirstName}
        style={cardStyles.textInput}
      />
      <Text variant="bodyMedium">{signUptext.lastName}</Text>
      <TextInput
        value={lastName}
        onChangeText={onChangeLastName}
        style={cardStyles.textInput}
      />
      <Text variant="bodyMedium">{signUptext.email}</Text>
      <TextInput
        value={email}
        onChangeText={onChangeEmail}
        style={cardStyles.textInput}
      />
      <Text variant="bodyMedium">{signUptext.username}</Text>
      <TextInput
        value={username}
        onChangeText={onChangeUserName}
        style={cardStyles.textInput}
      />
      <Text variant="bodyMedium">{signUptext.password}</Text>
      <TextInput
        value={password}
        onChangeText={onChangePassword}
        style={cardStyles.textInput}
      />
    </>
  ) : forgotPassword ? (
    <>
      <Text variant="headlineMedium">{signUptext.email}</Text>
      <TextInput
        value={email}
        onChangeText={onChangeEmail}
        style={cardStyles.textInput}
      />
    </>
  ) : (
    <>
      <Text variant="headlineMedium">{loginText.username}</Text>
      <TextInput
        value={username}
        onChangeText={onChangeUserName}
        style={cardStyles.textInput}
      />
      <Text variant="headlineMedium">{loginText.password}</Text>
      <TextInput
        value={password}
        onChangeText={onChangePassword}
        style={cardStyles.textInput}
      />
    </>
  );
};

export { UserInput };
