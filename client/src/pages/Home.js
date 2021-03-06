import React from "react";
import NavBar from "../components/NavBar/Navbar";
import Articles from "../components/Articles/Articles";
import { Header, Container, Segment, Image } from "semantic-ui-react";
//import Modal from "../components/modal";
import Snippet from "../components/HomeContent/snippet";
import logo from "../assets/Logo.png";

function Home() {
  return (
    <div>
      <NavBar />
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
