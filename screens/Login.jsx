import { SafeAreaView, StyleSheet } from "react-native";
import React, { useContext, useState } from "react";
import Container from "../components/login/Container";
import { UserInput } from "../components/login/UserInput";
import { Options } from "../components/login/Options";
import { Video, ResizeMode } from "expo-av";
import loginVideo from "../assets/blackfez_vid_1_trimmed.mp4";
import { ForgotPassword } from "../components/login/ForgotPassword";
import { useUser } from "../utils/GetUser";
import { useNavigation } from "@react-navigation/native";
import { Banner, Text } from "react-native-paper";
import { signUpStatus } from "../components/login/loginText";

const loginContainer = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  video: {
    position: "absolute",
    bottom: 0,
    left: 0,
    top: 0,
    right: 0,
  },
});

const Login = () => {
  const navigation = useNavigation();
  const { verifyUser } = useUser();
  const [register, setRegister] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [visible, setVisible] = useState(false);
  const [registerPageNumber, setRegisterPageNumber] = useState(0);
  const [passwordError, setPasswordError] = useState(false);
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    retypePassword: "",
  });

  const loginUser = async () => {
    await fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    })
      .then((response) => response.json())
      .then((data) => {
        if (verifyUser({ ...data, appointments: [] })) {
          navigation.navigate("Appointment");
        }
      });
    setUserDetails({
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
    });
  };

  const getNextPage = () => {
    setRegisterPageNumber((prev) => prev + 1);
  };

  const signUpUser = () => {
    const passwordValidation = new RegExp(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    );

    if (passwordValidation.test(userDetails.password)) {
      fetch("http://localhost:3001/signup", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userDetails),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.signup) {
            setVisible(data.signup);
            setRegister(false);
          }
        });
      setUserDetails({
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        password: "",
        retypePassword: "",
      });
      setRegisterPageNumber(0);
    } else {
      setPasswordError(true);
    }
  };
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
      <Banner
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          backgroundColor: passwordError ? "red" : "green",
          zIndex: 10000,
        }}
        visible={visible || passwordError}
        actions={[
          {
            label: "Close",
            onPress: () => {
              setVisible(false);
              setPasswordError(false);
            },
          },
        ]}
      >
        <Text style={{ color: "#fff" }} variant='titleLarge'>
          {passwordError ? signUpStatus.passwordError : signUpStatus.success}
        </Text>
      </Banner>
      <Container register={register}>
        <UserInput
          onChangeFirstName={(value) =>
            setUserDetails({ ...userDetails, firstName: value })
          }
          onChangeLastName={(value) =>
            setUserDetails({ ...userDetails, lastName: value })
          }
          onChangeEmail={(value) =>
            setUserDetails({ ...userDetails, email: value })
          }
          onChangeUserName={(value) =>
            setUserDetails({ ...userDetails, username: value })
          }
          onChangePassword={(value) => {
            setUserDetails({ ...userDetails, password: value });
          }}
          pageNumber={registerPageNumber}
          firstName={userDetails.firstName}
          lastName={userDetails.lastName}
          email={userDetails.email}
          username={userDetails.username}
          password={userDetails.password}
          forgotPassword={forgotPassword}
          register={register}
        />
        <Options
          onNextPress={getNextPage}
          pageNumber={registerPageNumber}
          register={register}
          forgotPassword={forgotPassword}
          onLoginPress={loginUser}
          onRegisterPress={signUpUser}
          onSignUpPress={() => {
            setRegister(true);
            setUserDetails({
              firstName: "",
              lastName: "",
              email: "",
              password: "",
            });
          }}
          onCancelPress={() => {
            setRegister(false);
            setRegisterPageNumber(0);
          }}
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
