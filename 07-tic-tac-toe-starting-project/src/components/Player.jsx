import React, { useState } from "react";

const Player = ({ initialName, symbol, isActive }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(initialName);

  const handleEditClick = () => {
    setIsEditing((editing) => !editing); //set함수는 비동기적으로 처리하기 때문에 이전의 가장 최신 state를 이용하기 위해서 함수로 전달(자동으로 이전 상태를 인자로 넣어줌)
  };
  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const playerName = isEditing ? (
    <input
      className="player-name"
      required
      value={name}
      onChange={handleInputChange}
    />
  ) : (
    <span className="player-name">{name}</span>
  );

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
