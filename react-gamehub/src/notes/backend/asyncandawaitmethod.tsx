// import axios, { AxiosError } from "axios";
// import { useState, useEffect } from "react";

// interface User {
//   id: number;
//   name: string;
// }

// function App() {
//   const [users, setUsers] = useState<User[]>([]);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const res = await axios.get<User[]>(
//           "https://jsonplaceholder.typicode.com/users"
//         );
//         setUsers(res.data);
//       } catch (err) {
//         setError((err as AxiosError).message);
//       }
//     };

//     fetchUsers();
//     // .then(res => setUsers(res.data))
//     // .catch(err => setError(err.message))
//   }, []);

//   return (
//     <>
//       {error && <p className="text-danger">{error}</p>}
//       <div>
//         <ul>
//           {users.map((user) => (
//             <li key={user.id}>{user.name}</li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// }

// export default App;
