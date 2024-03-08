import React, { useCallback, useState } from "react";
import { Button, Text } from "react-native-paper";
import { Dropdown } from "react-native-element-dropdown";
import { useUser } from "../utils/GetUser";
import DateTimePicker from "@react-native-community/datetimepicker";
import { View } from "react-native";
import { useMutation, useQuery } from "@apollo/client";
import { UPDATE_APPOINTMENTS } from "../api/mutations";
import { useNavigation } from "@react-navigation/native";
import { GET_APPOINTMENTS } from "../api/queries";

const Appointment = () => {
  const { user } = useUser();
  const navigation = useNavigation();
  const [updateUserAppointments] = useMutation(UPDATE_APPOINTMENTS, {
    refetchQueries: [GET_APPOINTMENTS],
  });
  const [isFocus, setIsFocus] = useState();
  const [page, setPage] = useState(0);
  const [value, setValue] = useState();
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const onDateChange = useCallback(
    (date) => {
      setDate(new Date(date.nativeEvent.timestamp));
    },
    [setOpen, setDate]
  );

  const data = [
    { label: "High Fade", value: "High Fade" },
    { label: "Mid Fade", value: "Mid Fade" },
    { label: "Low Fade", value: "Low Fade" },
    { label: "High Taper", value: "High Taper" },
    { label: "Mid Taper", value: "Mid Taper" },
    { label: "Low Taper", value: "Low Taper" },
    { label: "Others", value: "Others" },
  ];

  return (
    <View
      style={{
        height: "100%",
        width: "100%",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      {page == 0 ? (
        <>
          <Text variant='titleLarge'>Type of Haircut</Text>
          <Dropdown
            style={{ width: "100%" }}
            data={data}
            search
            maxHeight={300}
            labelField='label'
            valueField='value'
            placeholder={!isFocus ? "Select item" : "..."}
            searchPlaceholder='Search...'
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              setValue(item.value);
              setIsFocus(false);
            }}
          />
          <DateTimePicker
            mode='datetime'
            value={date}
            onChange={onDateChange}
          />
        </>
      ) : null}

      {page == 1 && user ? (
        <View
          style={{
            height: "80%",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Text variant='titleLarge'>{user?._id}</Text>
          <Text variant='titleLarge'>{user?.username}</Text>
          <Text variant='titleLarge'>{user?.first_name}</Text>
          <Text variant='titleLarge'>{user?.email}</Text>
          <Text variant='titleLarge'>{user?.phone_number}</Text>
          <Text variant='titleLarge'>{value}</Text>
          <Text variant='titleLarge'>{String(date)}</Text>
        </View>
      ) : null}
      <Button
        style={{
          backgroundColor: "lightblue",
          position: "absolute",
          height: "10%",
          bottom: 0,
          left: 0,
          right: 0,
          borderRadius: "none",
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => {
          if (page > 0) {
            updateUserAppointments({
              variables: {
                client_id: user?._id,
                email: user?.email,
                phone_number: user?.phone_number,
                username: user?.username,
                first_name: user?.first_name,
                type_of_haircut: value,
                Date: String(date),
              },
            });
            setPage(0);
            navigation.navigate("Home");
            setDate(new Date());
            setValue(null);
          } else {
            setPage((prev) => prev + 1);
          }
        }}
      >
        <Text variant='titleLarge'>{page < 1 ? "Next" : "Confirm"}</Text>
      </Button>
    </View>
  );
};

export default Appointment;
