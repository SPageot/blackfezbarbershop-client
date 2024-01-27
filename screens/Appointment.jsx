import React, { useState } from "react";
import { Card, Text, TextInput } from "react-native-paper";
import { Dropdown } from "react-native-element-dropdown";

const Appointment = () => {
  const [isFocus, setIsFocus] = useState();
  const [value, setValue] = useState();
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
    <Card style={{ justifyContent: "space-evenly", height: "100%" }}>
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
    </Card>
  );
};

export default Appointment;
