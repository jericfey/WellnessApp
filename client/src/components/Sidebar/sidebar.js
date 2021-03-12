import React from "react";
import { Header, Icon, Image, Menu, Segment, Sidebar } from "semantic-ui-react";

const SidebarExampleVisible = () => (
  <Sidebar
    as={Menu}
    animation="overlay"
    icon="labeled"
    inverted
    vertical
    visible
    width="thin"
  >
    <Menu.Item as="a">
      <Icon name="home" />
      Dashboard
    </Menu.Item>
    <Menu.Item as="a">
      <Icon name="gamepad" />
      Profile
    </Menu.Item>
    <Menu.Item as="a">
      <Icon name="camera" />
      New Workout
    </Menu.Item>
  </Sidebar>
);

export default SidebarExampleVisible;
