import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import s from '../../Container';

class Playerinfo extends PureComponent {
  render() {
    const { name, bio, city } = this.props.data;
    return (
      <s.PlayerInfoBox>
        <div>
          <p>
            Name : {name}
          </p>
          <p>
            About me : {bio}
          </p>
          <p>
            City : {city}
          </p>
        </div>
      </s.PlayerInfoBox>
    );
  }
}

Playerinfo.PropTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
  }).isRequired,
};

export default Playerinfo;
