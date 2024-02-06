import { View, Text } from "react-native";
import React, { Fragment, useEffect, useState } from "react";
import Container from "../components/home/Container";
import { useUser } from "../utils/GetUser";

const Home = () => {
  const { user } = useUser();
  const [appointments, setAppointments] = useState(user.appointments);

  return (
    <View>
      <Text>Upcoming Appointments</Text>
      <View style={{ alignItems: "center" }}>
        <Container>
          {appointments.length > 0
            ? appointments.map((appointment) => {
                return (
                  <Fragment key={appointment.id}>
                    <Text>{appointment.id}</Text>
                    <Text>{appointment.name}</Text>
                    <Text>{appointment.email}</Text>
                    <Text>{appointment.typeOfHaircut}</Text>
                    <Text>{appointment.date}</Text>
                    <Text>{appointment.time}</Text>
                  </Fragment>
                );
              })
            : null}
        </Container>
      </View>
    </View>
  );
};

export default Home;
