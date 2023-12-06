import React from "react";

function YourBotArmy({ bots, dischargeBot, deleteBot }) {
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {bots && bots.length > 0 && (
            bots.map((bot) => (
              <div key={bot.id} className="ui column">
                
                <button
                  className="ui mini red button"
                  onClick={() => deleteBot(bot)}
                >
                  x
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}


export default YourBotArmy;
