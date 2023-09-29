import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  ScrollView,
  Button,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DateTimePicker from "@react-native-community/datetimepicker";
import { MultiSelect } from "react-native-element-dropdown";
import SelectDropdown from "react-native-select-dropdown";

const Container = styled(SafeAreaView)`
  background-color: #c0c0c0;
  gap: 20px;
  flex: 1;
  align-items: center;
`;

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
  font-size: 20px;
`;

const Appointments = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [fullName, setFullName] = useState("");
  const [paymentType, setPaymentType] = useState();
  const [cutType, setCutType] = useState();
  const [phoneNumber, setPhoneNumber] = useState();

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
    setSelectedDate(selectedDate);
  };

  const onTextChange = (e) => {
    setFullName(e);
  };

  const onPhoneChange = (e) => {
    setPhoneNumber(e);
  };

  const onClickConfirm = async () => {
    return await fetch("http://127.0.0.1:8000/appointments/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        payment_type: paymentType,
        name: fullName,
        date: selectedDate,
        type_of_haircut: cutType,
        phone_number: phoneNumber,
      }),
    }).then((request) => console.log(request));
  };
  console.log(selectedDate);

  return (
    <Container>
      {paymentType && fullName && selectedDate && cutType && phoneNumber && (
        <ButtonContainer onPress={onClickConfirm}>
          <ButtonText>Confirm</ButtonText>
        </ButtonContainer>
      )}
      <DateTimeText>Full Name</DateTimeText>
      <TextInputStyle value={fullName} onChangeText={onTextChange} />
      <DateTimeText>Phone Number</DateTimeText>
      <TextInputStyle
        value={phoneNumber}
        keyboardType="number-pad"
        onChangeText={onPhoneChange}
      />
      <DateTimeText>Select Haircut</DateTimeText>
      <SelectDropdown
        data={cutOptions}
        onSelect={(selectedItem, index) => {
          setCutType({ id: index, item: selectedItem });
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
        value={selectedDate}
        mode="date"
        is24Hour
        onChange={onChangeDate}
      />
      <DateTimeText>Select a Time</DateTimeText>
      <DateTimePicker
        value={selectedDate}
        mode="time"
        is24Hour
        onChange={onChangeDate}
      />
      <DateTimeText>Select a Payment Type</DateTimeText>
      <SelectDropdown
        data={paymentOptions}
        onSelect={(selectedItem, index) => {
          setPaymentType({ id: index, item: selectedItem });
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          return item;
        }}
      />
    </Container>
  );
};

export default Appointments;
