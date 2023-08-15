import "./App.scss";
import team from "./data/team";
import Ticket from "./components/Ticket/Ticket";

const firstTicket = team[0];

const App = () => {
  return (
    <div className="app">
      <header>
        <h1>Ticket Tracker</h1>
      </header>
      <main>
        <section className="ticket-container">
          <Ticket
            id={firstTicket.id}
            name={firstTicket.name}
            role={firstTicket.role}
          />
        </section>
      </main>
    </div>
  );
};

export default App;
