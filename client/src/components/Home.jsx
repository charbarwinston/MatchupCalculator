import React from 'react';
import Matchup from './Matchup';

const Home = (props) => {
  return (
    <div className="home">
      <div className="row">
        <div className="col-12">
          <h1>LoL Matchup Calculator</h1>
        </div>
      </div>
      
      <div className="row">
        <div className="col-12">
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
              <div className="form-group col-6">
                <input className="btn btn-primary" type="submit" value="Go"/>
              </div>
            </div>
          </form>
        </div>
      </div>

      <Matchup />
    </div> 
  );
};

export default Home;
