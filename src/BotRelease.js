import React from "react";

function BotRelease({ bot, handleReleaseBot }) {
  return (
    <button onClick={() => handleReleaseBot(bot)}>Release Bot</button>
  );
}

export default BotRelease;
