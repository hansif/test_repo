import axios from "axios";
import { useEffect, useState } from "react";
import "./details.css"
export default function Details() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
          const res = await axios.get("/users/");
          setUsers(res.data);
          console.log(res.data); 
        };
        getUsers(); 
      }, []);
    return ( 
        <div className="customer">
             <table >
                    <thead>
                        <tr>
                            {/* <th scope="col">S.No.</th> */}
                            <th scope="col">User</th>
                            <th scope="col">Opted for Breakfast</th>
                            <th scope="col">Opted for Lunch</th>
                        </tr>
                    </thead>
                    <tbody>
                    {users.map((u) => (
                        <tr>
                        <td >{u.username}</td>
                        <td >{String(u.break)}</td>
                        <td >{String(u.evening)}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
        </div>
     );
}