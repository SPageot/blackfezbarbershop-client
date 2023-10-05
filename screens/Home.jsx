import { SafeAreaView, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { UserStateContext } from "../util/getUser";

const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #c0c0c0;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

const AppointmentsContainer = styled(View)`
  flex: 0.4;
  align-items: center;
  justify-content: space-evenly;
  background-color: #404040;
  padding: 10px;
  width: 90%;
`;

const AppoinmentLabel = styled(Text)`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
`;

const AppoinmentText = styled(Text)`
  color: #fff;
  font-size: 25px;
`;

const Home = () => {
  const { user } = useContext(UserStateContext);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      await fetch("http://127.0.0.1:8000/appointments/")
        .then((request) => request.json())
        .then((data) => setAppointments(data));
    };
    fetchAppointments();
  }, [appointments]);

  return (
    <Container>
      {appointments.length !== 0
        ? appointments.map((details) =>
            user.user.id === details.client_id ? (
              <AppointmentsContainer key={details.id}>
                <AppoinmentLabel>Date of Appointment</AppoinmentLabel>
                <AppoinmentText>{details.date}</AppoinmentText>
                <AppoinmentLabel>Haircut Type</AppoinmentLabel>
                <AppoinmentText>{details.type_of_haircut}</AppoinmentText>
                <AppoinmentLabel>Payment Type</AppoinmentLabel>
                <AppoinmentText>{details.payment_type}</AppoinmentText>
              </AppointmentsContainer>
            ) : null
          )
        : null}
    </Container>
  );
};

export default Home;
