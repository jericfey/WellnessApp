import React from "react";
import { Header, Container, Segment, Image } from "semantic-ui-react";
import logo from "../assets/Logo2.png";
import Modal from "../components/Modal/login";
import Zoom from "react-reveal/Zoom";
import "../index.css";

function Home() {
  return (
    <div className="home">
      <Zoom>
        <Container textAlign="center" className="logo3">
          <img
            src={logo}
            alt="logo"
            style={{ height: "100%", padding: "3em 5em" }}
            className="logo"
          />
          <Header
            as="h3"
            textAlign="center"
            className="slogan"
            size="huge"
            style={{ color: "black" }}
          >
            Your health, starts with YOU.
          </Header>
          <Modal />
        </Container>
      </Zoom>
    </div>
  );
}

export default Home;
