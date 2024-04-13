import { useState } from "react";
import Form from "./Form";

export default function Table() {
  const [players, setPlayers] = useState([
    {
      id: 1,
      name: "Lionel Messi",
      age: 35,
      position: "Forward",
      nationality: "Argentinian",
      club: "Paris Saint-Germain",
    },
    {
      id: 2,
      name: "Cristiano Ronaldo",
      age: 38,
      position: "Forward",
      nationality: "Portuguese",
      club: "Al Nassr",
    },
    {
      id: 3,
      name: "Kevin De Bruyne",
      age: 31,
      position: "Midfielder",
      nationality: "Belgian",
      club: "Manchester City",
    },
    {
      id: 4,
      name: "Virgil van Dijk",
      age: 31,
      position: "Defender",
      nationality: "Dutch",
      club: "Liverpool",
    },
  ]);

  const handleDelete = (id) => {
    setPlayers(players.filter((item) => item.id !== id))
  };

  return (
    <>
      <Form setPlayer={setPlayers} playerList={players} />
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Age</td>
            <td>Position</td>
            <td>Nationality</td>
            <td>Club</td>
            <td>Delete</td>
          </tr>
        </thead>
        <tbody>
          {players.map(item => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.position}</td>
                <td>{item.nationality}</td>
                <td>{item.club}</td>
                <td>
                  <button className="btn" onClick={_ => handleDelete(item.id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
