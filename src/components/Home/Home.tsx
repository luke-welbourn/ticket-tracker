import "./Home.scss";
import { Link } from "react-router-dom";

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

type HomeProps = {
  info: TeamMember[];
};

const Home = ({ info }: HomeProps) => {
  return (
    <div className="homePage">
      <div className="welcome">
        <h1>Welcome to Ticket Tracker Co.</h1>
        <h2>
          If you need support in your daily tasks here are your colleagues:
        </h2>
      </div>
      <div className="name-only__container">
        {info.map((worker) => (
          <div key={worker.id} className="name-only__card">
            <Link to={`/ticket-tracker/profiles/${worker.id}`} key={worker.id}>
              <p>
                Name: <br></br>
                {worker.name}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
