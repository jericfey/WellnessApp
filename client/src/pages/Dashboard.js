import React from "react";
import TopCards from "../components/TopCards";

import Sidebar from "../components/Sidebar/sidebar";
import ToDo from "../components/ToDo/todo";
import Weight from "../components/Weight/graph";

import { Container, Grid } from "semantic-ui-react";

import UserCalendar from "../components/Calendar/Calendar";

function Dashboard() {
  return (
    <div>
      <TopCards />
      <ToDo />
      <Sidebar />
      <Weight />
      <UserCalendar />
    </div>
  );
}

export default Dashboard;
