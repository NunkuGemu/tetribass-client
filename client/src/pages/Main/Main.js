import React, { Component } from 'react';
import LoginForm from '../../components/LoginForm';
import Game from '../../components/Game';

class Landing extends Component {
  render() {
    return (
      <div class='full-height app'>
        <div class='full-height row'>
          <div class='col form-bg'>
            <LoginForm />
          </div>
          <div class='col game-bg'>
            <Game />
          </div>
        </div>
      </div>
    )
  }
}

export default Landing;
