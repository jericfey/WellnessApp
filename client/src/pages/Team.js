import React from "react";
import Wrapper from "../components/Wrapper/Wrapper";
import TeamProfiles from "../components/TeamProfiles";
import Container from "../components/Container";
import Footer from "../components/Footer";

function Team() {
  return (
    <div>
      <Wrapper>
        <TeamProfiles />
      </Wrapper>
      <div>
        <Container />
        <Container />
        <Container />
        <Container />
      </div>
      <Footer />
    </div>
  );
}

export default Team;
