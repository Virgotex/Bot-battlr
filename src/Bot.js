import React from "react";

function Bot({ bot, handleEnlistBot }) {
  return (
    <div>
      <h2>{bot.name}</h2>
      <img src={bot.avatar_url} alt={bot.name} />
      <p>{bot.catchphrase}</p>
      <button onClick={() => handleEnlistBot(bot)}>Enlist Bot</button>
    </div>
  );
}

export default Bot;
