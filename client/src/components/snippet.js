import React from "react";
import { Container, Header, SidebarPusher, Grid } from "semantic-ui-react";

const Snippet = () => (
  <div>
    <Container text className="snippet" floated="left">
      <p>
        This wellness app will function as a source of information about the
        user’s water in-take, exercise activities, meal tracking, as well as
        medication and event reminder. Users will need to authenticate and log
        into the application to get their data displayed in dashboard format.
        They will be able to create events and set reminders as well as search
        OpenFDA API for known medication names to return possible side effects.
      </p>
    </Container>
  </div>
);

export default Snippet;
