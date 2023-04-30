import React, { useState, useEffect } from "react";
import Bot from "./Bot";

function BotCollection({ handleEnlistBot }) {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/bots")
      .then((response) => response.json())
      .then((data) => setBots(data));
  }, []);

  return (
    <div>
      <h2>Bots Collection</h2>
      {bots.map((bot) => (
        <Bot key={bot.id} bot={bot} handleEnlistBot={handleEnlistBot} />
      ))}
    </div>
  );
}

export default BotCollection;

