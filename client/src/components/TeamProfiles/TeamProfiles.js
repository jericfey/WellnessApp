import React from "react";

import TeamMemberCards from "../TeamMemberCards/TeamMemberCards";
import { Grid } from "semantic-ui-react";
import "./teamprofiles.css";

const TeamProfiles = () => (
  <Grid columns={1} divided>
    <Grid.Row>
      <Grid.Column>
        <TeamMemberCards />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default TeamProfiles;
