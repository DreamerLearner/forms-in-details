import React, { PureComponent } from 'react';
import BoardCell from './BoardCell';
import PropTypes from 'prop-types';

class PlayBoard extends PureComponent {
  render() {
    if (!this.props.data.cells) {
      return <p>Loading...</p>;
    }

    const { cells, players } = this.props.data;
    const boardsRows = cells.map((cell, index) =>
      <BoardCell key={index} players={players} cell={cell} markCell={this.props.markCell} />,
    );

    return (
      <div>
        <table>
          <tbody>
            {boardsRows}
          </tbody>
        </table>
      </div>
    );
  }
}

PlayBoard.PropTypes = {
  data: PropTypes.shape({
    cells: PropTypes.arrayOf(PropTypes.object).isRequired,
    players: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
  markCell: PropTypes.func.isRequired,
};

export default PlayBoard;
