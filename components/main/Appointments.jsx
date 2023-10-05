import {
  SafeAreaView,
  Text,
  TextInput,
  ScrollView,
  Pressable,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import DateTimePicker from "@react-native-community/datetimepicker";
import SelectDropdown from "react-native-select-dropdown";
import { UserStateContext } from "../../util/getUser";
import { useNavigation } from "@react-navigation/core";

const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #c0c0c0;
`;

const ScrollContainer = styled(ScrollView)``;

const ButtonContainer = styled(Pressable)`
  width: 100%;
  padding: 10px;
  background-color: #1260cc;
  align-items: center;
`;

const ButtonText = styled(Text)`
  font-size: 20px;
  color: #ffffff;
`;

const TextInputStyle = styled(TextInput)`
  width: 80%;
  height: 40px;
  border: 1px solid black;
`;

const DateTimeText = styled(Text)`
  margin-top: 20px;
  font-size: 20px;
`;

const Appointments = () => {
  const { user } = useContext(UserStateContext);
  const navigation = useNavigation();
  const [appointment, setAppointment] = useState({
    date: new Date(),
    first_name: user.user.first_name,
    last_name: user.user.last_name,
    payment_type: "",
    type_of_haircut: "",
    client_id: user.user.id,
  });

  const paymentOptions = ["Credit", "Cash"];
  const cutOptions = [
    "High Fade",
    "Mid Fade",
    "Low Fade",
    "High Taper",
    "Mid Taper",
    "Low Taper",
    "Other",
  ];

  const onChangeDate = (e, selectedDate) => {
    setAppointment({ ...appointment, date: selectedDate });
  };

  const onClickConfirm = async () => {
    await fetch("http://127.0.0.1:8000/appointments/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(appointment),
    })
      .then((request) => request.json())
      .then((data) => (data ? navigation.navigate("Home") : null));
  };

  return (
    <Container>
      <ScrollContainer
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
          gap: "5px",
        }}
      >
        {Object.values(appointment) && (
          <ButtonContainer onPress={onClickConfirm}>
            <ButtonText>Confirm</ButtonText>
          </ButtonContainer>
        )}
        <DateTimeText>First Name</DateTimeText>
        <Text>{appointment.first_name} </Text>
        <DateTimeText>Last Name</DateTimeText>
        <Text>{appointment.last_name}</Text>
        <DateTimeText>Client ID</DateTimeText>
        <Text>{appointment.client_id}</Text>
        <DateTimeText>Select Haircut</DateTimeText>
        <SelectDropdown
          data={cutOptions}
          onSelect={(selectedItem, index) => {
            setAppointment({ ...appointment, type_of_haircut: selectedItem });
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
        />
        <DateTimeText>Select a Date</DateTimeText>
        <DateTimePicker
          value={appointment.date}
          mode="date"
          onChange={onChangeDate}
        />
        <DateTimeText>Select a Time</DateTimeText>
        <DateTimePicker
          value={appointment.date}
          mode="time"
          is24Hour
          onChange={onChangeDate}
        />
        <DateTimeText>Select a Payment Type</DateTimeText>
        <SelectDropdown
          data={paymentOptions}
          onSelect={(selectedItem, index) => {
            setAppointment({ ...appointment, payment_type: selectedItem });
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
        />
      </ScrollContainer>
    </Container>
  );
};

export default Appointments;
