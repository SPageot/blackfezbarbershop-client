import { View, Text, ScrollView } from "react-native";
import React from "react";
import { useUser } from "../utils/GetUser";
import { useQuery } from "@apollo/client";
import { GET_USERS } from "../api/queries";
import { Card } from "react-native-paper";
import UserDetails from "../components/List/UserDetails";

const ListOfUsers = () => {
  const { user } = useUser();
  const { data, error, loading } = useQuery(GET_USERS);

  if (user.isAdmin && data) {
    return (
      <ScrollView
        style={{ height: "100%", width: "100%" }}
        contentContainerStyle={{
          height: "100%",
          alignItems: "center",
          gap: 20,
        }}
      >
        {data && !loading
          ? data.getUsers.map((client) => {
              if (client._id != user._id) {
                return (
                  <Card
                    contentStyle={{
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                      gap: 10,
                      height: "100%",
                    }}
                    style={{ width: "90%", height: "15%", margin: 10 }}
                    key={client._id}
                  >
                    <View>
                      <UserDetails
                        labelName='First Name'
                        value={client.first_name}
                      />
                      <UserDetails
                        labelName='Last Name'
                        value={client.last_name}
                      />
                    </View>
                    <View>
                      <UserDetails
                        labelName='Phone Number'
                        value={client.phone_number}
                      />
                      <UserDetails labelName='Email' value={client.email} />
                    </View>

                    <UserDetails labelName='Username' value={client.username} />
                  </Card>
                );
              }
            })
          : null}
      </ScrollView>
    );
  }
};

export default ListOfUsers;
