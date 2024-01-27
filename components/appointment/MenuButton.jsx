import { Text, Pressable } from "react-native";
import React from "react";

const MenuButton = ({ title, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <Text>{title}</Text>
    </Pressable>
  );
};

export default MenuButton;
