import "./App.scss";
import team from "./data/team";

const App = () => {
  return (
    <div className="app">
      <header>
        <h2>Ticket Tracker</h2>
      </header>
      <main>
        <section className="ticket-container"></section>
      </main>
    </div>
  );
};

export default App;
