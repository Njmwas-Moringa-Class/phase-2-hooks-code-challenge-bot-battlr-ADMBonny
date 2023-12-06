import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, enlistBot }) {
  // Your code here
  return (
    <div className="ui four column grid">
      <div className="row">
        {/*...and here..*/
         
         bots && bots.length > 0 ? (
          bots.map((bot) => (
            <BotCard key={bot.id} bot={bot} enlistBot={enlistBot} />
          ))
          

        ) : (
          <div className="ui column">No bots available</div>
        )
        }
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
