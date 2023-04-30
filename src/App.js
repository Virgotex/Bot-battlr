import React, { useState, useEffect } from 'react';
import BotCollection from './BotCollection';
import BotArmy from './BotArmy';
import BotDischarge from './BotDischarge';
import BotEnlist from './BotEnlist';
import BotRelease from './BotRelease';

function App() {
  const [bots, setBots] = useState([]);
  const [enlistedBots, setEnlistedBots] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/bots')
      .then(response => response.json())
      .then(data => setBots(data));
  }, []);

  const handleEnlistBot = (bot) => {
    setEnlistedBots([...enlistedBots, bot]);
  };

  const handleReleaseBot = (bot) => {
    const filteredBots = enlistedBots.filter((b) => b.id !== bot.id);
    setEnlistedBots(filteredBots);
  };

  const handleDischargeBot = (botId) => {
    const filteredBots = enlistedBots.filter((b) => b.id !== botId);
    setEnlistedBots(filteredBots);
  };

  return (
    <div className="App">
      <BotCollection bots={bots} handleEnlistBot={handleEnlistBot} />
      <BotArmy enlistedBots={enlistedBots} handleReleaseBot={handleReleaseBot} />
      <BotDischarge handleDischargeBot={handleDischargeBot} />
      <BotEnlist handleEnlistBot={handleEnlistBot} />
      <BotRelease handleReleaseBot={handleReleaseBot} />
    </div>
  );
}

export default App;

