import { View, Text, ScrollView } from "react-native";
import React from "react";
import { useUser } from "../utils/GetUser";
import { useQuery } from "@apollo/client";
import { GET_ALL_APPOINTMENTS } from "../api/queries";
import { Card } from "react-native-paper";
import UserDetails from "../components/List/UserDetails";

const ListOfAppointments = () => {
  const { user } = useUser();
  const { data, error, loading } = useQuery(GET_ALL_APPOINTMENTS);

  if (user.isAdmin) {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={{
            alignItems: "center",
            gap: 10,
          }}
        >
          {data && !loading
            ? data.getAllAppointments.map((appointment) => {
                return (
                  <Card
                    contentStyle={{
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 10,
                    }}
                    style={{ width: "90%", height: 200 }}
                    key={appointment.id}
                  >
                    <UserDetails labelName='Apt ID' value={appointment.id} />
                    <View
                      style={{
                        width: "80%",
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                      }}
                    >
                      <UserDetails
                        labelName='First Name'
                        value={appointment.first_name}
                      />
                      <UserDetails
                        labelName='Phone Number'
                        value={appointment.phone_number}
                      />
                    </View>

                    <View
                      style={{
                        width: "80%",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <UserDetails
                        labelName='Type Of Haircut'
                        value={appointment.type_of_haircut}
                      />
                      <UserDetails labelName='Date' value={appointment.Date} />
                    </View>
                  </Card>
                );
              })
            : null}
        </ScrollView>
      </View>
    );
  }
};

export default ListOfAppointments;
