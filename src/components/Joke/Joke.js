import React from 'react';
import "./Joke.css";

const Joke = ({joke}) => {
  return (
      <p className="ChucksJoke">
        {joke.value}
      </p>
  );
};

export default Joke;