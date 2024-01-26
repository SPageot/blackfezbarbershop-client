import { SafeAreaView, StyleSheet } from "react-native";
import React, { useState } from "react";
import Container from "../components/login/Container";
import { UserInput } from "../components/login/UserInput";
import { Options } from "../components/login/Options";
import { Video, ResizeMode } from "expo-av";
import loginVideo from "./../assets/blackfez_vid_1_trimmed.mp4";
import { ForgotPassword } from "../components/login/ForgotPassword";

const loginContainer = StyleSheet.create({
  container: {
    flexGrow: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  video: {
    position: "absolute",
    alignSelf: "center",
    width: "100%",
    height: "100%",
  },
});

const Login = () => {
  const [register, setRegister] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  return (
    <SafeAreaView style={loginContainer.container}>
      <Video
        shouldPlay
        isMuted
        resizeMode={ResizeMode.COVER}
        style={loginContainer.video}
        source={loginVideo}
        isLooping
      />
      <Container>
        <UserInput forgotPassword={forgotPassword} register={register} />
        <Options
          register={register}
          forgotPassword={forgotPassword}
          onSignUpPress={() => setRegister(true)}
          onCancelPress={() => setRegister(false)}
          onBackPress={() => setForgotPassword(false)}
        />
        {!register && !forgotPassword ? (
          <ForgotPassword onPress={() => setForgotPassword(true)} />
        ) : null}
      </Container>
    </SafeAreaView>
  );
};

export default Login;
