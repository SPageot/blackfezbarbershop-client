import { View, ScrollView } from "react-native";
import { Text } from "react-native-paper";
import React, { Fragment, useEffect } from "react";
import Container from "../components/home/Container";
import { useQuery } from "@apollo/client";
import { GET_APPOINTMENTS } from "../api/queries";
import { useUser } from "../utils/GetUser";

const Home = () => {
  const { user } = useUser();

  const {
    data: appointments,
    error,
    loading,
  } = useQuery(GET_APPOINTMENTS, {
    variables: { client_id: user._id },
  });
  const userAppointments = appointments?.getAppointments;

  return (
    <View>
      <Text variant='titleLarge'>Upcoming Appointments</Text>
      <ScrollView style={{ height: "100%" }}>
        {userAppointments?.length > 0
          ? userAppointments?.map((appointment) => {
              return (
                <Container key={appointment.id}>
                  <Fragment>
                    <Text>{appointment.id}</Text>
                    <Text>{appointment.first_name}</Text>
                    <Text>{appointment.username}</Text>
                    <Text>{appointment.email}</Text>
                    <Text>{appointment.phone_number}</Text>
                    <Text>{appointment.type_of_haircut}</Text>
                    <Text>{appointment.Date}</Text>
                  </Fragment>
                </Container>
              );
            })
          : null}
      </ScrollView>
    </View>
  );
};

export default Home;
