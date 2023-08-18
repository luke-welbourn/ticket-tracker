// import { useState } from "react";

// type Profile = {
//   experience: string;
//   department: string;
//   techstack: string[];
//   profilePicture: string;
// };

// type TeamMember = {
//   id: number;
//   name: string;
//   role: string;
//   profile: Profile;
// };

// type DropDownProps = {
//   info: TeamMember[];
// };

//   const options = [...new Set(info.map((member) => member.role))];

//   const [selected, setSelected] = useState(options[0]);

// const DropDown = ({ info }: DropDownProps) => {
//   return (
//     <div>
//       <form>
//         <select
//           value={selected}
//           onChange={(e) => setSelected(e.target.value)}
//           placeholder="Select Role"
//         >
//           {options.map((value) => (
//             <option value={value} key={value}>
//               {value}
//             </option>
//           ))}
//         </select>
//       </form>
//     </div>
//   );
// };

// export default DropDown;
