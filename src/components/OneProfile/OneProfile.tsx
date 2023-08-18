import "./OneProfile.scss";
import { useParams } from "react-router-dom";

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

type OneProfileProps = {
  info: TeamMember[];
};

const OneProfileExport = ({ info }: OneProfileProps) => {
  const idParam = useParams().id;

  const profileParam = idParam
    ? info.find((object) => object.id === parseInt(idParam, 10))
    : undefined;

  const { id, name, role, profile } = profileParam || {};

  return (
    <div>
      <div className="profile-card" key={id}>
        <img
          src={profile?.profilePicture}
          alt={`${name}'s Profile`}
          className="profile-picture"
        />
        <p className="profile-name">{name}</p>
        <p className="profile-role">{role}</p>
        <p className="profile-details">Experience: {profile?.experience}</p>
        <p className="profile-details">Department: {profile?.department}</p>
        <p className="profile-details">
          Techstack: {profile?.techstack.join(", ")}
        </p>
      </div>
    </div>
  );
};

export default OneProfileExport;
