import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SettingsForm from './SettingsForm';
import SettingsFormMulti from './SettingsFormMulti';
import TcombDummyForm from './TcombDummyForm';
import { onSettingsSubmit, lookupData } from '../../actions';

class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countryList: '',
    };

    // const lookupData = this.props.lookupData();

    // lookupData.payload.then(response =>{
    // 	this.setState({countryList : response.data.data.partner_preference.country});
    // });
  }

  componentWillMount() {
    // console.log('componentWillMount');
    const lookupData = this.props.lookupData();

    lookupData.payload.then(response => {
      this.setState({ countryList: response.data.data.partner_preference.country });
    });
  }

  render() {
    if (this.props.location.pathname === '/settings/multiselect') {
      return (
        <div>
          <h3>Settings Page</h3>
          <SettingsFormMulti onSettingsSubmit={this.props.onSettingsSubmit} data={this.props.players} />
        </div>
      );
    }
    else if (this.props.location.pathname === '/settings/dummy') {
      return (
        <div>
          <h3>Dummy</h3>
          <TcombDummyForm />
        </div>
      );
    }
    else{
      return (
        <div>
          <h3>Settings Page</h3>
          <SettingsForm onSettingsSubmit={this.props.onSettingsSubmit} countryList={this.state.countryList} />
        </div>
      );
    }
  }
}

Settings.PropTypes = {
  lookupData: PropTypes.object.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  onSettingsSubmit: PropTypes.func.isRequired,
};

const selected = state => ({ players: state.settings.players });

export default connect(selected, { onSettingsSubmit, lookupData })(Settings);
