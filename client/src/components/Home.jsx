import React from 'react';

const Home = (props) => {
  return (
    <div className="home">
      <h1>LoL Matchup Calculator</h1>

      <form action="">
        <div className="form-row">
          <div className="form-group col-6">
            <label htmlFor="">Your Champion</label>
            <input className="form-control" type="text"/>
          </div>

          <div className="form-group col-6">
            <label htmlFor="">Opponent's Champion</label>
            <input className="form-control" type="text"/>
          </div>
        </div>
        <div className="form-row">
          <input className="btn btn-primary" type="submit" value="Go"/>
        </div>
      </form>
    </div> 
  );
}

export default Home;
