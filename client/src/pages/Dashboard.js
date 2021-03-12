import React from "react";
import TopCards from "../components/TopCards";
import Sidebar from "../components/Sidebar/sidebar";
import ToDo from "../components/ToDo/todo";

import { Container, Grid } from "semantic-ui-react";

function Dashboard() {
  return (
    <div>
      <TopCards />
      <ToDo />
      <Sidebar />
    </div>
  );
}

export default Dashboard;
