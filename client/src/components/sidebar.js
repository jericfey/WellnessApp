import React from "react";
import {
  Checkbox,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
} from "semantic-ui-react";

const MainSidebar = () => (
  //const [visible, setVisible] = React.useState(false)
  <div>
    <Grid columns={1}>
      <Grid.Column>
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
        <Sidebar.Pusher>
          <Segment basic>
            <Header as="h3">Application Content</Header>
            <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
          </Segment>
        </Sidebar.Pusher>
      </Grid.Column>
    </Grid>
  </div>
);

export default MainSidebar;
