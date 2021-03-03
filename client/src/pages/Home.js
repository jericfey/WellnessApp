import React from "react";
import { Header, Sidebar } from "semantic-ui-react";
import ContainerExampleText from "../components/articles";

function HomeHeader() {
  return (
    <div>
      <Sidebar />
      <Header textAlign="center" size="huge">
        Folláine
      </Header>
      <ContainerExampleText />
    </div>
  );
}

export default HomeHeader;
