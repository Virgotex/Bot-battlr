import React from "react";

function BotEnlist({ bot, handleEnlistBot }) {
  return (
    <button onClick={() => handleEnlistBot(bot)}>Enlist Bot</button>
  );
}

export default BotEnlist;
