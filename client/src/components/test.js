import React, { useState } from "react";
import {
  Visibility,
  Container,
  Menu,
  Segment,
  Button,
} from "semantic-ui-react";

function MainNav(props) {
  const [hideFixedMenu, setHideFixedMenu] = useState(false);
  const [showFixedMenu, setShowFixedMenu] = useState(true);
  const [fixed, setFixed] = useState("top");
  return (
    <Visibility
      once={false}
      onBottomPassed={showFixedMenu}
      onBottomPassedReverse={hideFixedMenu}
    >
      <Segment inverted textAlign="center" vertical>
        <Menu
          fixed={fixed ? "top" : null}
          inverted={!fixed}
          pointing={!fixed}
          secondary={!fixed}
          size="large"
        >
          <Container>
            <Menu.Item as="a" active>
              Home
            </Menu.Item>
            <Menu.Item as="a">The Team</Menu.Item>
            <Menu.Item as="a">Contact Us</Menu.Item>
            <Menu.Item position="right">
              <Button as="a" inverted={!fixed}>
                Log in
              </Button>
              <Button
                as="a"
                inverted={!fixed}
                primary={fixed}
                style={{ marginLeft: "0.5em" }}
              >
                Sign Up
              </Button>
            </Menu.Item>
          </Container>
        </Menu>
      </Segment>
    </Visibility>
  );
}

export default MainNav;
