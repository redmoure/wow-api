// type CharPanelProps = {
//   charObj: { name: string; server: string };
// };

const obj = {
  name: 'Amberian',
  server: 'Draenor',
};

function CharPanel() {
  return (
    <div>
      <h2>{obj.name}</h2>
      <h3>{obj.server}</h3>
    </div>
  );
}

export default CharPanel;
