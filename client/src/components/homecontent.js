import React from "react";
import { Segment, Image, Grid } from "semantic-ui-react";
import { Logo } from "../Assets/Logo.png";

const LogoHome = () => (
  <Segment floated="left" className="logo3">
    <img src={Logo} alt="logo" style={{ heigt: "90%" }} />
    <p>
      Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia
      facete scriptorem, est autem aliquip detraxit at. Usu ocurreret
      referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque
      electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei
      ex natum rebum iisque.
    </p>
  </Segment>
);

export default LogoHome;
