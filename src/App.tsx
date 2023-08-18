import "./App.scss";
import team from "./data/team";
import Ticket from "./components/Ticket/Ticket";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import ProfileExport from "./components/Profile/Profile";
import OneProfileExport from "./components/OneProfile/OneProfile";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Nav />
        <Routes>
          <Route path="/ticket-tracker" element={<Home info={team} />} />
          <Route
            path="/ticket-tracker/tickets/"
            element={<Ticket info={team} />}
          />
          <Route
            path="/ticket-tracker/profiles/"
            element={<ProfileExport info={team} />}
          />
          <Route
            path="/ticket-tracker/profiles/:id"
            element={<OneProfileExport info={team} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
