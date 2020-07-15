const databaseStuff = require('./database-stuff');

function parseMatch(match) {
  let matchObj = JSON.parse(match);
  let team1 = matchObj.team1;
  let win = team1.win;
  delete team1[win];
  let team2 = matchObj.team2;
  let parsedMatch = {};
  for (const lane in team1) {
    parsedMatch = Object.assign(parsedMatch, parseLane(team1[lane], team2[lane], win));
  };
  return parsedMatch;
}

function parseLane(lanerA, lanerB, win) {
  return {
    [lanerA] : {
      [lanerB]: (win == "win" ? 1 : 0) 
    },
    [lanerB] : {
      [lanerA]: (win == "win" ? 0 : 1) 
    }
  };
}

module.exports = { 
  parseMatch
};