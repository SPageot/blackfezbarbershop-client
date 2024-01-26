import React from "react";
import { Text, TextInput } from "react-native-paper";
import { cardStyles } from "./loginStyles";
import { loginText, signUptext } from "./loginText";

const UserInput = ({
  register = false,
  forgotPassword,
  onChangeUserName,
  onChangePassword,
  onChangeFirstName,
  onChangeLastName,
  onChangeEmail,
}) => {
  return register ? (
    <>
      <Text variant="bodyMedium">{signUptext.firstName}</Text>
      <TextInput
        onChangeText={onChangeFirstName}
        style={cardStyles.textInput}
      />
      <Text variant="bodyMedium">{signUptext.lastName}</Text>
      <TextInput onChangeText={onChangeLastName} style={cardStyles.textInput} />
      <Text variant="bodyMedium">{signUptext.email}</Text>
      <TextInput onChangeText={onChangeEmail} style={cardStyles.textInput} />
      <Text variant="bodyMedium">{signUptext.username}</Text>
      <TextInput onChangeText={onChangeUserName} style={cardStyles.textInput} />
      <Text variant="bodyMedium">{signUptext.password}</Text>
      <TextInput onChangeText={onChangePassword} style={cardStyles.textInput} />
    </>
  ) : forgotPassword ? (
    <>
      <Text variant="headlineMedium">{signUptext.email}</Text>
      <TextInput onChangeText={onChangeEmail} style={cardStyles.textInput} />
    </>
  ) : (
    <>
      <Text variant="headlineMedium">{loginText.username}</Text>
      <TextInput onChangeText={onChangeUserName} style={cardStyles.textInput} />
      <Text variant="headlineMedium">{loginText.password}</Text>
      <TextInput onChangeText={onChangePassword} style={cardStyles.textInput} />
    </>
  );
};

export { UserInput };
