import React from "react";
import { Button, Card } from "react-native-paper";
import { optionText } from "./loginText";

const Options = ({
  register = false,
  onLoginPress,
  onSignUpPress,
  onCancelPress,
  onSubmitPress,
  onRegisterPress,
  onBackPress,
  forgotPassword,
  onNextPress,
  pageNumber,
}) => {
  return register ? (
    <Card.Actions>
      <Button onPress={onCancelPress}>{optionText.cancel}</Button>
      {pageNumber === 4 ? (
        <Button onPress={onRegisterPress}>{optionText.signUp}</Button>
      ) : (
        <Button onPress={onNextPress}>{optionText.next}</Button>
      )}
    </Card.Actions>
  ) : forgotPassword ? (
    <Card.Actions>
      <Button onPress={onBackPress}>{optionText.back}</Button>
      <Button onPress={onSubmitPress}>{optionText.submit}</Button>
    </Card.Actions>
  ) : (
    <Card.Actions>
      <Button onPress={onLoginPress}>{optionText.login}</Button>
      <Button onPress={onSignUpPress}>{optionText.signUp}</Button>
    </Card.Actions>
  );
};

export { Options };
