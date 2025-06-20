import { useEffect, useState } from 'react';

type CharPanelProps = {
  character: { name: string; server: string };
};

// const API_CALL = `https://eu.api.blizzard.com/profile/wow/character`;
const API_CALL = 'https://jsonplaceholder.typicode.com';

function CharPanel({ character }: CharPanelProps) {
  const [charObj, setCharObj] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${API_CALL}/users/1`);
      const data = await res.json();
      setCharObj(data);
    };
    fetchData();
  }, [character]);

  return (
    <div>
      <h2>Name: {charObj.name}</h2>
      <h3>Server: {charObj.username}</h3>
    </div>
  );
}

export default CharPanel;
