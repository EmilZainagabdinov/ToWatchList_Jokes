import React, {useState, useEffect} from 'react';
import Joke from "../../components/Joke/Joke";

const Task2 = () => {
  const [jokes, setJokes] = useState([]);

  const url = "https://api.chucknorris.io/jokes/random";

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);

      if (response.ok) {
        const joke = await response.json();
        setJokes(joke);
      }
    }

    fetchData().catch(console.error);
  }, []);

  return (
      <div className="TaskBlock">
        <Joke joke={jokes} />
      </div>
  );
};

export default Task2;