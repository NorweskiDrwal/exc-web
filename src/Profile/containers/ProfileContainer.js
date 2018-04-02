import React, { Component, Fragment } from 'react';

import MainControl from '../components/MainControl';

class ProfileContainer extends Component {
  constructor(props) {
    super(props);

    this.state = null;
  };

  render() {
    return (
      <Fragment>
        <MainControl />
      </Fragment>
    )
  }

};

export default ProfileContainer;