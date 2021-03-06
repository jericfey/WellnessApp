import React from "react";
import { Container, Header, SidebarPusher, Grid } from "semantic-ui-react";

const Snippet = () => (
  <div>
    <Grid divided="vertically">
      <Grid.Row columns={2}>
        <Grid.Column floated="left" className="snippet">
          <p>
            Your health is important, so why not keep track of it? Folláine is a
            one stop application for you to keep track This wellness app will
            function as a source of information about the user’s water in-take,
            exercise activities, meal tracking, as well as medication and event
            reminder.
          </p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
);

export default Snippet;
