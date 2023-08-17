import "./Profile.scss";

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

type ProfileProps = {
  info: TeamMember[];
};

const ProfileExport = ({ info }: ProfileProps) => {
  return (
    <div className="profile-list">
      {info.map((worker) => {
        const {
          profile: { profilePicture, experience, department, techstack },
          name,
          role,
          id,
        } = worker;

        return (
          <div className="profile-card" key={id}>
            <img
              src={profilePicture}
              alt={`${name}'s Profile`}
              className="profile-picture"
            />
            <p className="profile-name">{name}</p>
            <p className="profile-role">{role}</p>
            <p className="profile-details">Experience: {experience}</p>
            <p className="profile-details">Department: {department}</p>
            <p className="profile-details">Techstack: {techstack.join(", ")}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ProfileExport;
