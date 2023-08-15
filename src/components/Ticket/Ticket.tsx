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
  const [counters, setCounters] = useState<number[]>(
    new Array(info.length).fill(0)
  );

  const handleIncrement = (index: number) => {
    setCounters((prevCounters) => {
      const newCounters = [...prevCounters];
      newCounters[index] += 1;
      return newCounters;
    });
  };

  const handleDecrement = (index: number) => {
    setCounters((prevCounters) => {
      const newCounters = [...prevCounters];

      if (newCounters[index] > 0) {
        newCounters[index] -= 1;
      }
      return newCounters;
    });
  };

  return (
    <div className="ticket-container__created">
      {info.map((worker, index) => (
        <div className="ticket-tile" key={worker.id}>
          <p>Name: {worker.name}</p>
          <p>Role: {worker.role}</p>
          <div className="ticket-tile__counterContainer">
            <p>
              Counter: <br></br> {counters[index]}
            </p>
            <div className="ticket-tile__buttonContainer">
              <button onClick={() => handleDecrement(index)}>-</button>
              <button onClick={() => handleIncrement(index)}>+</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Ticket;
