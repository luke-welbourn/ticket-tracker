import { useState, FormEvent } from "react";
import SearchBox from "../SearchBox/SearchBox";

import "./Ticket.scss";

type Profile = {
  experience: string;
  department: string;
  techstack: string[];
  profilePicture: string;
};

type TeamMember = {
  id: number;
  name: string;
  role: string;
  profile: Profile;
};

type TicketProps = {
  info: TeamMember[];
};

const Ticket = ({ info }: TicketProps) => {
  const [counters, setCounters] = useState<number[]>(
    new Array(info.length).fill(0)
  );
  //
  //
  // between these points is all the stuff for the search box reference.

  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    const userInput = event.currentTarget.value.toLowerCase();
    setSearchTerm(userInput);
  };

  const filteredWorkersBySearchTerm = info.filter((worker) => {
    if (worker.name.toLowerCase().includes(searchTerm)) {
      return true;
    } else if (worker.role.toLowerCase().includes(searchTerm)) {
      return true;
    } else {
      return false;
    }
  });

  //
  //

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

  const total = counters.reduce((sum, currentValue) => sum + currentValue, 0);

  return (
    <div className="refactor-ticket">
      <header>
        <h1>📊 Ticket Tracker 📊</h1>
      </header>
      <main>
        <section className="ticket-container">
          <div>
            <div className="search-box__created">
              <SearchBox searchTerm={searchTerm} handleInput={handleInput} />
            </div>
            <div className="ticket-container__created">
              {filteredWorkersBySearchTerm.map((worker, index) => (
                <div
                  className={`ticket-tile ${
                    counters[index] <= 1
                      ? "ticket-tile--low"
                      : counters[index] <= 5
                      ? "ticket-tile--medium"
                      : "ticket-tile--high"
                  }`}
                  key={worker.id}
                >
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
              <div className="ticket-tile ticket-tile__counter">
                <p>Total Tickets:</p>
                <div className="ticket-tile__counterContainer">
                  <p>{total}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Ticket;
