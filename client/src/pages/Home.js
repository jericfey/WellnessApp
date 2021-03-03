import React from "react";
import { Header, Sidebar } from "semantic-ui-react";

function HomeHeader() {
  return (
    <div>
      <Sidebar />
      <Header textAlign="center" size="huge">
        Folláine
      </Header>
    </div>
  );
}

export default HomeHeader;
