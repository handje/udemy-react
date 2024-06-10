import { useState, useRef } from "react";

export default function Player() {
  const [player, setPlayer] = useState(null);
  const inputPlayer = useRef();

  const handleClick = () => {
    setPlayer(inputPlayer.current.value);
    inputPlayer.current.value = "";
  };

  return (
    <section id="player">
      <h2>Welcome {player ?? "unknown entity"}</h2>
      <p>
        <input type="text" ref={inputPlayer} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
