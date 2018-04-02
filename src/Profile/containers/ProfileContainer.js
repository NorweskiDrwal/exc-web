import React, { Component, Fragment } from 'react';

import MainControl from '../components/MainControl';
import MainMenu from '../components/MainMenu';
import Logout from '../components/Logout';

class ProfileContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openMenu: false
    };
  };

  openMenu = () => {
    this.setState({
      openMenu: true
    })
  }

  render() {
    return (
      <Fragment>
        <MainControl openMenu={this.openMenu} open={this.state.openMenu} />
        <MainMenu />
        <Logout />
      </Fragment>
    )
  }

};

export default ProfileContainer;