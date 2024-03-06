import { View, Text, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { useUser } from "../utils/GetUser";
import { Button, TextInput } from "react-native-paper";
import Update from "../components/profile/Update";
import { useMutation, useQuery } from "@apollo/client";
import { DELETE_USER, UPDATE_USER } from "../api/mutations";
import { GET_USER } from "../api/queries";

const Profile = () => {
  const { user, verifyUser } = useUser();
  const [deleteUser] = useMutation(DELETE_USER);
  const { data, error, refetch } = useQuery(GET_USER, {
    variables: { getUserId: user._id },
  });
  const [updatedUserInfo] = useMutation(UPDATE_USER, {
    refetchQueries: [GET_USER],
  });

  const [willUpdate, setWillUpdate] = useState(false);
  const [updateUser, setUpdateUser] = useState({
    id: user._id,
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    phone_number: user.phone_number,
    username: user.username,
  });

  useEffect(() => {
    if (data) {
      verifyUser(data?.getUser[0]);
    }
  }, [data]);

  const onSavePress = () => {
    setWillUpdate(false);
    updatedUserInfo({ variables: updateUser });
  };

  const onUpdatePress = () => {
    setWillUpdate(true);
  };

  const onCancelPress = () => {
    setWillUpdate(false);

    setUpdateUser({
      _id: user.id,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      phone_number: user.phone_number,
      username: user.username,
    });
  };
  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <View>
        {willUpdate ? (
          <Button onPress={onSavePress}>Save</Button>
        ) : (
          <Button onPress={onUpdatePress}>Update</Button>
        )}
        {willUpdate ? <Button onPress={onCancelPress}>Cancel</Button> : null}
      </View>
      <Update
        willUpdate={willUpdate}
        OnSavePress={() => setWillUpdate(false)}
        onCancelPress={() => setWillUpdate(false)}
        onUpdatePress={() => setWillUpdate(true)}
        onChange={(value) => {
          setUpdateUser({ ...updateUser, first_name: value });
        }}
        originalValue={user.first_name}
        textValue={updateUser.first_name}
      />
      <Update
        willUpdate={willUpdate}
        OnSavePress={() => setUpdateUser(false)}
        onCancelPress={() => setUpdateUser(false)}
        onUpdatePress={() => setUpdateUser(true)}
        onChange={(value) => setUpdateUser({ ...updateUser, last_name: value })}
        originalValue={user.last_name}
        textValue={updateUser.last_name}
      />
      <Update
        willUpdate={willUpdate}
        OnSavePress={() => setUpdateUser(false)}
        onCancelPress={() => setUpdateUser(false)}
        onUpdatePress={() => setUpdateUser(true)}
        onChange={(value) => setUpdateUser({ ...updateUser, email: value })}
        originalValue={user.email}
        textValue={updateUser.email}
      />
      <Update
        willUpdate={willUpdate}
        OnSavePress={() => setUpdateUser(false)}
        onCancelPress={() => setUpdateUser(false)}
        onUpdatePress={() => setUpdateUser(true)}
        onChange={(value) =>
          setUpdateUser({ ...updateUser, phone_number: value })
        }
        originalValue={user.phone_number}
        textValue={updateUser.phone_number}
      />
      <Update
        willUpdate={willUpdate}
        OnSavePress={() => setUpdateUser(false)}
        onCancelPress={() => setUpdateUser(false)}
        onUpdatePress={() => setUpdateUser(true)}
        onChange={(value) => setUpdateUser({ ...updateUser, username: value })}
        originalValue={user.username}
        textValue={updateUser.username}
      />
      <Pressable
        onPress={() => {
          deleteUser({ variables: { deleteUserId: String(user.id) } });
          verifyUser("");
        }}
      >
        <Text>Delete Account</Text>
      </Pressable>
    </View>
  );
};

export default Profile;
