import React from "react";
import { Container, Header, SidebarPusher, Grid } from "semantic-ui-react";

const Snippet = () => (
  <div>
    <Container text className="snippet">
      <Grid divided="vertically" textAlign="left">
        <Grid.Row>
          <Grid.Column>
            <p>
              Your health is important, so why not keep track of it? Folláine is
              a one stop application for you to keep track This wellness app
              will function as a source of information about the user’s water
              in-take, exercise activities, meal tracking, as well as medication
              and event reminder.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </div>
);

export default Snippet;
