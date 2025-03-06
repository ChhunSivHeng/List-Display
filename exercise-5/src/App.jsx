import React from "react";
import data from "./data";
import Card from "./Card";
import "./index.css"; 

const App = () => {
  return (
    <div className="app">
      <h1>Name Card</h1>
      <div className="card-container">
        {data.map((person) => (
          <Card
            key={person.id}
            image={person.image}
            name={person.name}
            hobbies={person.hobbies}
            gender={person.gender}
            address={person.address}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
