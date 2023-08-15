import { useState } from "react";
import "./Ticket.scss";

type TeamMember = {
  id: number;
  name: string;
  role: string;
};

type TicketProps = {
  info: TeamMember[];
};

const Ticket = ({ info }: TicketProps) => {
  return (
    <div className="ticket-container__created">
      {info.map((worker) => (
        <div className="ticket-tile" key={worker.id}>
          <p>Name: {worker.name}</p>
          <p>Role: {worker.role}</p>
          <div>
            <p>Counter:</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Ticket;
