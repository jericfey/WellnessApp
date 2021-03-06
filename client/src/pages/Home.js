import React from "react";
import NavBar from "../components/NavBar/Navbar";
import Articles from "../components/Articles/Articles";
import { Header, Container, Segment, Image } from "semantic-ui-react";
//import Modal from "../components/modal";
import Snippet from "../components/HomeContent/snippet";
import logo from "../assets/Logo.png";
import Zoom from "react-reveal/Zoom";

function Home() {
  return (
    <div>
      <NavBar />
      <Zoom>
        <Container textAlign="center" className="logo3">
          <img
            src={logo}
            alt="logo"
            style={{ heigt: "90%", padding: "3em 0em" }}
          />
          <Header as="h3" textAlign="center" className="slogan">
            Your health, starts with YOU.
          </Header>
        </Container>
        <Snippet />
        <Articles />
      </Zoom>
    </div>
  );
}

export default Home;
