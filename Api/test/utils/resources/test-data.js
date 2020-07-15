const testMatch = '{' +
  '"team1": {' +
    '"top": "teemo",' +
    '"mid": "ahri",' +
    '"jungle": "zac",' +
    '"adc": "thresh",' +
    '"support": "bard",' +
    '"win": "win"' +
  '},' +
  '"team2": {' +
    '"top": "garen",' +
    '"mid": "taliyah",' +
    '"jungle": "nocturne",' +
    '"adc": "vayne",' +
    '"support": "braum",' +
    '"win": "fail"' +
  '}' +
'}';

const testLane = '{' +
  '"team1": {' +
    '"top": "teemo",' +
    '"win": "win"' +
  '},' +
  '"team2": {' +
    '"top": "garen",' +
    '"win": "fail"' +
  '}' +
'}';

const testChampionStats = {
  teemo: {
    garen: .75,
    darius: .52,
    teemo: .5,
    vayne: .82,
    volibear: .23
  },
  garen: {
    teemo:  .25,
    darius: .52,
    volibear: .72,
    vayne: .32,
    garen: .5
  }
}

module.exports = {
  testChampionStats,
  testMatch,
  testLane
}