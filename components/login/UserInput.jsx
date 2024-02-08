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
  onChangePhoneNumber,
  phoneNumber,
  pageNumber,
}) => {
  return register ? (
    <>
      {pageNumber == 0 ? (
        <>
          <Text variant='bodyMedium'>{signUptext.firstName}</Text>
          <TextInput
            value={firstName}
            onChangeText={onChangeFirstName}
            style={cardStyles.textInput}
          />
        </>
      ) : null}
      {pageNumber == 1 ? (
        <>
          <Text variant='bodyMedium'>{signUptext.lastName}</Text>
          <TextInput
            value={lastName}
            onChangeText={onChangeLastName}
            style={cardStyles.textInput}
          />
        </>
      ) : null}

      {pageNumber == 2 ? (
        <>
          <Text variant='bodyMedium'>{signUptext.email}</Text>
          <TextInput
            value={email}
            onChangeText={onChangeEmail}
            style={cardStyles.textInput}
          />
        </>
      ) : null}
      {pageNumber == 3 ? (
        <>
          <Text variant='bodyMedium'>{signUptext.phoneNumber}</Text>
          <TextInput
            value={phoneNumber}
            onChangeText={onChangePhoneNumber}
            style={cardStyles.textInput}
          />
        </>
      ) : null}
      {pageNumber == 4 ? (
        <>
          <Text variant='bodyMedium'>{signUptext.username}</Text>
          <TextInput
            value={username}
            onChangeText={onChangeUserName}
            style={cardStyles.textInput}
          />
          <Text variant='bodyMedium'>{signUptext.password}</Text>
          <TextInput
            value={password}
            onChangeText={onChangePassword}
            style={cardStyles.textInput}
          />
          <Text variant='bodyMedium'>Password Rules:</Text>
          <Text variant='bodySmall'>
            - Minimum 8 Characters and a Maximum of 10 Characters
          </Text>
          <Text variant='bodySmall'>
            - Must Contain At Least One Uppercase Character
          </Text>
          <Text variant='bodySmall'>
            - Must Contain At Least One Lowercase Character
          </Text>
          <Text variant='bodySmall'>
            - Must Contain At Least One Uppercase Character
          </Text>
          <Text variant='bodySmall'>- Must Contain One Number</Text>
        </>
      ) : null}
    </>
  ) : forgotPassword ? (
    <>
      <Text variant='headlineMedium'>{signUptext.email}</Text>
      <TextInput
        value={email}
        onChangeText={onChangeEmail}
        style={cardStyles.textInput}
      />
    </>
  ) : (
    <>
      <Text variant='headlineMedium'>{loginText.username}</Text>
      <TextInput
        value={username}
        onChangeText={onChangeUserName}
        style={cardStyles.textInput}
      />
      <Text variant='headlineMedium'>{loginText.password}</Text>
      <TextInput
        value={password}
        onChangeText={onChangePassword}
        style={cardStyles.textInput}
      />
    </>
  );
};

export { UserInput };
