import React from 'react';
import { useState } from 'react';

const Matchup = (props) => {
  const [userChampion, setUserChampion] = useState('Teemo');
  const [opponentChampion, setOpponentChampion] = useState('Garen');

  return (
    <div className="matchup card">
      <div className="card-header">
        <h2>The Matchup</h2>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-6">
            <p>Your Champion: {userChampion}</p>
            <img src="./images/teemo.png" alt=""/>
          </div>
          <div className="col-6">
            <p>Opponent's Champion: {opponentChampion}</p>
            <img src="./images/garen.png" alt=""/>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Matchup;
