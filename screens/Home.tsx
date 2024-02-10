import { View, ScrollView } from "react-native";
import { Text } from "react-native-paper";
import React, { Fragment } from "react";
import Container from "../components/home/Container";
import { useUser } from "../utils/GetUser";

const Home = () => {
  const { userAppointments } = useUser();

  return (
    <View>
      <Text variant='titleLarge'>Upcoming Appointments</Text>
      <ScrollView style={{ height: "40%" }}>
        {userAppointments?.updateAppointments?.length > 0
          ? userAppointments?.updateAppointments.map((appointment) => {
              return (
                <Container key={appointment.id}>
                  <Fragment>
                    <Text>{appointment.id}</Text>
                    <Text>{appointment.first_name}</Text>
                    <Text>{appointment.username}</Text>
                    <Text>{appointment.type_of_haircut}</Text>
                    <Text>{appointment.Date}</Text>
                    <Text>{appointment.Time}</Text>
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
