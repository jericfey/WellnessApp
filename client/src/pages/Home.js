import React from "react";
import MainNav from "../components/test";
import Articles from "../components/articles";
import { Header, Container, Segment, Image } from "semantic-ui-react";
//import Modal from "../components/modal";
import Snippet from "../components/snippet";
import logo from "../Assets/Logo.png";

function Home() {
  return (
    <div>
      <MainNav />
      <Container textAlign="center" className="logo3">
        <img src={logo} alt="logo" style={{ heigt: "90%" }} />
        <Header as="h3" textAlign="center">
          Your health, starts with YOU.
        </Header>
      </Container>

      <Snippet />
      <Articles />
    </div>
  );
}

export default Home;
