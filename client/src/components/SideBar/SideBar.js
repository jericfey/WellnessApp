import React from "react";
import { Header, Icon, Image, Menu, Segment, Sidebar } from "semantic-ui-react";
import "./sidebar.css";

const MainSidebar = () => (
  <Sidebar
    className="menu"
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
      Home
    </Menu.Item>
    <Menu.Item as="a">
      <Icon name="group" />
      The Team
    </Menu.Item>
    <Menu.Item as="a">
      <Icon name="dashboard" />
      Dashboard
    </Menu.Item>
    <div className="login">Login</div>
  </Sidebar>
);

export default MainSidebar;
