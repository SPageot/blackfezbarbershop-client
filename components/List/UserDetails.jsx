import { View } from "react-native";
import { Text } from "react-native-paper";
import React from "react";

const UserDetails = ({ labelName, value }) => {
  return (
    <View>
      <Text style={{ textAlign: "center" }} variant='titleMedium'>
        {labelName}
      </Text>
      <Text style={{ textAlign: "center" }} variant='titleSmall'>
        {value}
      </Text>
    </View>
  );
};

export default UserDetails;
