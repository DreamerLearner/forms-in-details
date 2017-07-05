import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class BoardCell extends PureComponent {
  render() {
    const cells = this.props.cell.map(singlecell =>
      <td key={Math.random()} id={singlecell.cellid} onClick={() => this.props.markCell(singlecell.cellid)}>
        {singlecell.cellValue}
      </td>,
    );

    return (
      <tr id={Math.random()}>
        {cells}
      </tr>
    );
  }
}

BoardCell.PropTypes = {
  cell: PropTypes.arrayOf(PropTypes.object).isRequired,
  markCell: PropTypes.func.isRequired,
};

export default BoardCell;
