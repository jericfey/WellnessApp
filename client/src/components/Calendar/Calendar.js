import React, {useState} from "react";
import Calendar from "react-calendar";
import { Container, Card } from "semantic-ui-react";

function UserCalendar() {
  const [value, onChange] = useState(new Date());

  return (
    <Container>
      <Card>
      <Calendar onChange={onChange} value={value} calendarType='ISO 8601'/>
      </Card>
    </Container>
  );
}

export default UserCalendar;
