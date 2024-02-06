import React, { useState } from "react";
import { Button, Card, Text, TextInput } from "react-native-paper";
import { Dropdown } from "react-native-element-dropdown";
import { useUser } from "../utils/GetUser";
import { DatePickerModal } from "react-native-paper-dates";
import { View } from "react-native";

const Appointment = () => {
  const { user, verifyUser } = useUser();
  const [isFocus, setIsFocus] = useState();
  const [confirmAppointment, setConfirmAppointment] = useState(false);
  const [page, setPage] = useState(0);
  const [value, setValue] = useState();
  const [date, setDate] = React.useState(undefined);
  const [open, setOpen] = React.useState(true);
  console.log(user);
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
            mode='single'
            visible={open}
            onDismiss={onDismissSingle}
            date={date}
            onConfirm={onConfirmSingle}
          />
        </>
      ) : null}

      {page == 2 ? (
        <View
          style={{
            height: "80%",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Text variant='titleLarge'>{user.id}</Text>
          <Text variant='titleLarge'>{user.username}</Text>
          <Text variant='titleLarge'>{user.firstName}</Text>
          <Text variant='titleLarge'>{value}</Text>
          <Text variant='titleLarge'>{date}</Text>
        </View>
      ) : null}
      <Button
        onPress={() => {
          if (page > 1) {
            console.log({
              ...user,
              appoinments: [
                ...user.appoinments,
                {
                  id: user.id,
                  username: user.username,
                  firstName: user.firstName,
                  typeOfHaircut: value,
                  date: date,
                },
              ],
            });

            console.log("appointment Cofirmed");
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
