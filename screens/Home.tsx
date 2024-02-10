import { View, ScrollView } from "react-native";
import { Text } from "react-native-paper";
import React, { Fragment, useEffect, useState } from "react";
import Container from "../components/home/Container";
import { useUser } from "../utils/GetUser";

const Home = () => {
  const { user } = useUser();
  const [appointments, setAppointments] = useState(user.setUser.appointments);

  return (
    <View>
      <Text variant='titleLarge'>Upcoming Appointments</Text>
      <ScrollView style={{ height: "40%" }}>
        {appointments?.length > 0
          ? appointments.map((appointment) => {
              return (
                <Container>
                  <Fragment key={appointment.id}>
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
