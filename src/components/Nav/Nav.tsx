import "./Nav.scss";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="Nav-bar">
      <Link to={"/ticket-tracker/tickets/"} className="Nav-bar__item">
        Tickets
      </Link>
      <Link to={"/ticket-tracker/"} className="Nav-bar__item">
        Home
      </Link>
      <Link to={"/ticket-tracker/profiles/"} className="Nav-bar__item">
        Profiles
      </Link>
    </div>
  );
};

export default Nav;
