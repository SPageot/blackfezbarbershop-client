import React, { useEffect, useState } from "react";
import { Button, Card, Text, TextInput } from "react-native-paper";
import { Dropdown } from "react-native-element-dropdown";
import { useUser } from "../utils/GetUser";
import { DatePickerModal } from "react-native-paper-dates";
import { View } from "react-native";
import { useMutation } from "@apollo/client";
import { UPDATE_APPOINTMENTS } from "../api/mutations";

const Appointment = () => {
  const { user, verifyUser } = useUser();
  const [
    updateUserAppointments,
    { data: app_data, loading: app_loading, error: app_error },
  ] = useMutation(UPDATE_APPOINTMENTS);
  const [isFocus, setIsFocus] = useState();
  const [confirmAppointment, setConfirmAppointment] = useState(false);
  const [page, setPage] = useState(0);
  const [value, setValue] = useState();
  const [date, setDate] = useState(undefined);
  const [open, setOpen] = useState(true);

  console.log(app_data);

  const onDismissSingle = React.useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onConfirmSingle = React.useCallback(
    (params) => {
      setOpen(false);
      setDate(String(params.date)?.slice(0, 16));
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
    <Card
      style={{
        flex: 1,
      }}
    >
      {page == 0 ? (
        <>
          <Text variant='titleLarge'>Type of Haicut</Text>
          <Dropdown
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
        </>
      ) : null}

      {page == 1 ? (
        <>
          <DatePickerModal
            locale='en'
            mode='single'
            visible={open}
            onDismiss={onDismissSingle}
            date={date}
            onConfirm={onConfirmSingle}
          />
        </>
      ) : null}

      {page == 2 && user ? (
        <View
          style={{
            height: "80%",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Text variant='titleLarge'>{user?.setUser.id}</Text>
          <Text variant='titleLarge'>{user?.setUser.username}</Text>
          <Text variant='titleLarge'>{user?.setUser.first_name}</Text>
          <Text variant='titleLarge'>{value}</Text>
          <Text variant='titleLarge'>{date}</Text>
        </View>
      ) : null}
      <Button
        onPress={() => {
          if (page > 1) {
            updateUserAppointments({
              variables: {
                id: user?.setUser.id,
                username: user?.setUser.username,
                first_name: user?.setUser.first_name,
                type_of_haircut: value,
                Date: date,
                Time: "10:00pm",
              },
            });
            console.log("appointment Cofirmed: " + app_data);
            verifyUser(app_data);
          }
          setPage((prev) => prev + 1);
        }}
      >
        {page < 2 ? "Next" : "Confirm"}
      </Button>
    </Card>
  );
};

export default Appointment;
