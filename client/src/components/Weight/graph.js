import React from "react";
import { Header, Table } from "semantic-ui-react";

function Weight() {
  return (
    <div className="weight">
      <Header>Your Current Weight Is: </Header>
      <div class="form">
        <input type="text" id="t-name" placeholder="Date" />
        <input type="number" min="0" id="t-amount" placeholder="Weight (lbs)" />
        <button id="add-btn">
          <i class="fa fa-plus buttons"></i> Add{" "}
        </button>
        <button id="sub-btn">
          <i class="fa fa-minus"></i> Subtract
        </button>
        <p class="error"></p>
      </div>
      //*Table:
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell className="t-name">Date</Table.HeaderCell>
            <Table.HeaderCell>Weight</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <tbody id="tbody"></tbody>
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
      <div className="tableweight">
        <table>
          <thead>
            <th>Weight</th>
            <th>Date</th>
          </thead>
          <tbody id="tbody"></tbody>
        </table>
      </div>
      <canvas id="myChart"></canvas>
    </div>
  );
}

export default Weight;
