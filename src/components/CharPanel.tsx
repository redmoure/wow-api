import { useEffect, useState } from 'react';

type CharPanelProps = {
  character: { name: string; server: string };
};

const API_CALL = `https://eu.api.blizzard.com/profile/wow/character`;

function CharPanel({ character }: CharPanelProps) {
  const [charObj, setCharObj] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `${API_CALL}/${character.server.toLowerCase()}/${character.name.toLowerCase()}/specializations `
      );
      const json = await res.json();
      setCharObj(json);
    };
    fetchData();
  }, [character]);
  return (
    <div>
      <h2>Name: {character.name}</h2>
      <h3>Server: {character.server}</h3>
    </div>
  );
}

export default CharPanel;
