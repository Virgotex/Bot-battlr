import React from "react";

function BotDischarge({ botId, handleDischargeBot }) {
  const handleClick = async () => {
    try {
      await fetch(`http://localhost:3001/bots/${botId}`, {
        method: "DELETE",
      });
      handleDischargeBot(botId);
    } catch (error) {
      console.error(error);
    }
  };

  return <button onClick={handleClick}>Discharge Bot</button>;
}

export default BotDischarge;
