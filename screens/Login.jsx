import { SafeAreaView, StyleSheet } from "react-native";
import React, { useContext, useState } from "react";
import Container from "../components/login/Container";
import { UserInput } from "../components/login/UserInput";
import { Options } from "../components/login/Options";
import { Video, ResizeMode } from "expo-av";
import loginVideo from "./../assets/blackfez_vid_1_trimmed.mp4";
import { ForgotPassword } from "../components/login/ForgotPassword";
import { useUser } from "../utils/GetUser";
import { useNavigation } from "@react-navigation/native";

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
    bottom: 0,
    left: 0,
  },
});

const Login = () => {
  const navigation = useNavigation();
  const { verifyUser } = useUser();
  const [register, setRegister] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
  });

  const loginUser = async () => {
    await fetch("http://localhost:3001/user", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    })
      .then((response) => response.json())
      .then((data) => {
        if (verifyUser(data)) {
          navigation.navigate("Home");
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
          onChangePassword={(value) =>
            setUserDetails({ ...userDetails, password: value })
          }
          firstName={userDetails.firstName}
          lastName={userDetails.lastName}
          email={userDetails.email}
          username={userDetails.username}
          password={userDetails.password}
          forgotPassword={forgotPassword}
          register={register}
        />
        <Options
          register={register}
          forgotPassword={forgotPassword}
          onLoginPress={loginUser}
          onSignUpPress={() => {
            setRegister(true);
            setUserDetails({
              firstName: "",
              lastName: "",
              email: "",
              username: "",
              password: "",
            });
          }}
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
