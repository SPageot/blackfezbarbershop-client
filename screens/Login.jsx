import { SafeAreaView, StyleSheet } from "react-native";
import React, { useContext, useEffect, useState } from "react";
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
import { useMutation, useQuery } from "@apollo/client";
import { REGISTER_USER, SET_USER } from "../api/mutations";

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
  const [user, { data, loading, error }] = useMutation(SET_USER);
  const [
    userSignUp,
    { data: registerData, loading: registerLoading, error: registerError },
  ] = useMutation(REGISTER_USER);
  const { verifyUser } = useUser();
  const [register, setRegister] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [visible, setVisible] = useState(false);
  const [registerPageNumber, setRegisterPageNumber] = useState(0);
  const [passwordError, setPasswordError] = useState(false);
  const [userDetails, setUserDetails] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    username: "",
    password: "",
  });
  const loginUser = async () => {
    user({
      variables: {
        username: userDetails.username,
        password: userDetails.password,
      },
    });

    setUserDetails({
      first_name: "",
      last_name: "",
      phone_number: "",
      email: "",
      username: "",
      password: "",
    });
  };

  const getNextPage = () => {
    setRegisterPageNumber((prev) => prev + 1);
  };

  useEffect(() => {
    if (registerData) {
      setVisible(registerData);
      setRegister(false);
    }
  }, [registerData]);

  useEffect(() => {
    if (data) {
      if (verifyUser(data)) {
        navigation.navigate("Appointment");
      }
    }
  }, [data]);

  const signUpUser = () => {
    const passwordValidation = new RegExp(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    );

    if (!passwordValidation.test(userDetails.password)) {
      userSignUp({ variables: userDetails });

      setUserDetails({
        first_name: "",
        last_name: "",
        email: "",
        username: "",
        phone_number: "",
        password: "",
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
            setUserDetails({ ...userDetails, first_name: value })
          }
          onChangeLastName={(value) =>
            setUserDetails({ ...userDetails, last_name: value })
          }
          onChangeEmail={(value) =>
            setUserDetails({ ...userDetails, email: value })
          }
          onChangePhoneNumber={(value) =>
            setUserDetails({ ...userDetails, phone_number: value })
          }
          onChangeUserName={(value) =>
            setUserDetails({ ...userDetails, username: value })
          }
          onChangePassword={(value) => {
            setUserDetails({ ...userDetails, password: value });
          }}
          pageNumber={registerPageNumber}
          phoneNumber={userDetails.phone_number}
          firstName={userDetails.first_name}
          lastName={userDetails.last_name}
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
              first_name: "",
              last_name: "",
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
