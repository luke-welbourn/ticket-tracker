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
  //
  //
  const [counter, setCounter] = useState<number>(0);
  //
  //
  const handleIncrement = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <div className="ticket-container__created">
      {info.map((worker) => (
        <div className="ticket-tile" key={worker.id}>
          <p>Name: {worker.name}</p>
          <p>Role: {worker.role}</p>
          <div>
            <p>Counter: {counter}</p>
            <button onClick={handleIncrement}>Increment Counter</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Ticket;
