import { View, Text } from "react-native";
import React from "react";
import MenuButton from "./MenuButton";

const Menu = ({ title }) => {
  return (
    <View>
      <Text>{title | "Type of Haircut"}</Text>
      <MenuButton title='High Fade' />
      <MenuButton title='Mid Fade' />
      <MenuButton title='Low Fade' />
      <MenuButton title='High Taper' />
      <MenuButton title='Mid Taper' />
      <MenuButton title='Low Taper' />
      <MenuButton title='Other' />
    </View>
  );
};

export default Menu;
