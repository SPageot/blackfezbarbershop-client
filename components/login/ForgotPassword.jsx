import React from "react";
import { Button } from "react-native-paper";
import { loginText } from "./loginText";

const ForgotPassword = ({ onPress }) => {
  return (
    <>
      <Button onPress={onPress}>{loginText.forgotPassword}</Button>
    </>
  );
};

export { ForgotPassword };
