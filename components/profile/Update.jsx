import { View, Text } from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";

const Update = ({ originalValue, onChange, textValue, willUpdate }) => {
  return (
    <View>
      {willUpdate ? (
        <TextInput
          style={{ width: 300 }}
          onChangeText={onChange}
          value={textValue}
        />
      ) : (
        <Text>{originalValue}</Text>
      )}
    </View>
  );
};

export default Update;
