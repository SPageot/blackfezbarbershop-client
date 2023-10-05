import { View, Text, TextInput, Image, Pressable } from "react-native";
import styled, { css } from "styled-components";

const BrandContainer = styled(View)`
  background-color: #ebebeb;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

const BrandImage = styled(Image)`
  height: 200px;
  width: 200px;
`;

const FormContainer = styled(View)`
  gap: 30px;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 50px;
  width: 100%;
`;

const FormInput = styled(TextInput)`
  width: 80%;
  border: 2px solid #000;
  height: 40px;
  color: #000;
  padding: 5px;
  ${(props) =>
    props.small
      ? css`
          height: 30px;
        `
      : null}
`;

const FormLabel = styled(Text)`
  font-size: 30px;
  color: #000;
  ${(props) =>
    props.small
      ? css`
          font-size: 15px;
        `
      : null}
`;

const ButtonContainer = styled(Pressable)`
  width: 300px;
  padding: 20px 0;
  align-items: center;
  background-color: grey;
  color: #fff;
  margin-bottom: 20px;
`;

const ButtonText = styled(Text)`
  color: #fff;
  font-size: 20px;
  ${(props) =>
    props.small
      ? css`
          font-size: 15px;
        `
      : null}
`;

export {
  BrandContainer,
  BrandImage,
  ButtonContainer,
  FormContainer,
  FormInput,
  FormLabel,
  ButtonText,
};
