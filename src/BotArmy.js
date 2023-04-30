import React, { useState } from "react";
import Bot from "./Bot";

function BotArmy({ enlistedBots, handleReleaseBot }) {
  return (
    <div>
      <h2>Bot Army</h2>
      {enlistedBots.map((bot) => (
        <div key={bot.id}>
          <Bot bot={bot} />
          <button onClick={() => handleReleaseBot(bot)}>Release Bot</button>
        </div>
      ))}
    </div>
  );
}

export default BotArmy;
