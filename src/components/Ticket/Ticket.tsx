import { useState } from "react";

import { teamMember, team } from "../../data/team";

import "./Ticket.scss";

type ticketType = {
  id: number;
  name: string;
  role: string;
};

const Ticket = ({ id, name, role }: ticketType) => {
  //
  //
  return (
    <div className="ticket-tile" key={id}>
      <p>Name: {name}</p>
      <p>Role: {role}</p>
      <div>
        <p>Counter:</p>
      </div>
    </div>
  );
};

export default Ticket;
