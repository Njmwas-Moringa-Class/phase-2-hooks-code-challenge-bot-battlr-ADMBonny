import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  
    const [bots, setBots] = useState([]);
    const [selectedBots, setSelectedBots] = useState([]);

  
    useEffect(() => {
      
      fetch("http://localhost:8002/bots")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })

        .then((data) => {
        console.log("Fetched bots:", data);
        setBots(data)
      })
        .catch((error) => console.error("Error fetching bots:", error));
    }, []);
  
  
  const enlistBot = (bot) => {
    
    if (!selectedBots.find((selectedBot) => selectedBot.id === bot.id)) {
      setSelectedBots([...selectedBots, bot]);
    }
  };
    const dischargeBot = (bot) => {
      
      const updatedBots = selectedBots.filter((selectedBot) => selectedBot.id !== bot.id);
      setSelectedBots(updatedBots);
    };
  
    const deleteBot = (bot) => {
      
      fetch(`http://localhost:8002/bots/${bot.id}`, {
        method: "DELETE",
      })
        .then(() => dischargeBot(bot))
        .catch((error) => console.error("Error deleting bot:", error));
    };
  
    return (
      <div>
        <YourBotArmy
          bots={selectedBots}
          dischargeBot={dischargeBot}
          deleteBot={deleteBot}
          
        />
        <BotCollection bots={bots} enlistBot={enlistBot} />
      </div>
    );
  }
  
  



  


export default BotsPage;
