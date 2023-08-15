import "./App.scss";
import team from "./data/team";
import Ticket from "./components/Ticket/Ticket";

const App = () => {
  return (
    <div className="app">
      <header>
        <h1>Ticket Tracker</h1>
      </header>
      <main>
        <section className="ticket-container">
          <Ticket info={team} />
        </section>
      </main>
    </div>
  );
};

export default App;
