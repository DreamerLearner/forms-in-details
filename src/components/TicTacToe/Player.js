import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Player extends PureComponent {
  render() {
    if (!this.props.data) {
      return <p>Loading Player...</p>;
    }

    const players = this.props.data;
    let activePlayerTxt = '';

    const activePlayer = players.find(player => player.isActive === true);

    activePlayerTxt = `${activePlayer.playerName}'s turn`;

    return (
      <p>
        {activePlayerTxt}
      </p>
    );
  }
}

Player.PropTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Player;
