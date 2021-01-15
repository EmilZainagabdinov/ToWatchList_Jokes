import React from 'react';
import "./Joke.css";

const Joke = ({joke}) => {
  return (
      <p className="JokeBlock">
        <img className="ChucksIcon" src={joke.icon_url} alt="" height="60px" width="auto"/>
        <p className="ChucksJoke">{joke.value}</p>
      </p>
  );
};

export default Joke;