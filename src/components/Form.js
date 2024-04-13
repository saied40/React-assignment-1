import { useState } from "react";

export default function Form({ setPlayer, playerList }) {

  const [state, setState] = useState({
    id: null,
    name: null,
    age: null,
    position: null,
    nationality: null,
    club: null,
  });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlayer([...playerList, state]);
    [...e.target.children].forEach(item => {
      if (item.children[1] !== undefined) {
        item.children[1].value = ''
      };
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add new player</h3>
      <div className="form-control">
        <label htmlFor="id">ID :</label>
        <input
          type="number"
          id="id"
          name="id"
          placeholder="ID"
          required
          onChange={handleChange}
        />
      </div>
      <div className="form-control">
        <label htmlFor="name">Name :</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Player's name"
          onChange={handleChange}
        />
      </div>
      <div className="form-control">
        <label htmlFor="age">Age :</label>
        <input
          type="number"
          id="age"
          name="age"
          placeholder="Player's age"
          onChange={handleChange}
        />
      </div>
      <div className="form-control">
        <label htmlFor="position">Position :</label>
        <input
          type="text"
          id="position"
          name="position"
          placeholder="Player's position"
          onChange={handleChange}
        />
      </div>
      <div className="form-control">
        <label htmlFor="nationality">Nationality :</label>
        <input
          type="text"
          id="nationality"
          name="nationality"
          placeholder="Player's nationality"
          onChange={handleChange}
        />
      </div>
      <div className="form-control">
        <label htmlFor="club">Club :</label>
        <input
          type="text"
          id="club"
          name="club"
          placeholder="Player's club"
          onChange={handleChange}
        />
      </div>
      <div className="form-control">
        <input type="submit" />
      </div>
    </form>
  );
};
