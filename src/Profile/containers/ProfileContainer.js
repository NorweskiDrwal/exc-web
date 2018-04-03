import React, { Component, Fragment } from 'react';

import MainControl from '../components/MainControl';
import Navigation from '../components/Navigation';

class ProfileContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openMenu: false,
      openBackdrop: false,
      openSearch: false
    };
  };

  menuList = [
    {name: 'chat', icon: 'fa-comments'},
    {name: 'trophies', icon: 'fa-trophy'},
    {name: 'settings', icon: 'fa-cog'},
    {name: 'challenges', icon: 'fa-handshake-o'},
    {name: 'check-in', icon: 'fa-comments'},
    {name: 'ranks', icon: 'fa-cubes'},
    {name: 'spots', icon: 'fa-map-marker'},
    {name: 'friends', icon: 'fa-users'}
  ];

  openMenu = () => {
    this.setState({
      openMenu: true,
      openBackdrop: true
    })
  }

  closeMenu = () => {
    this.setState({
      openMenu: false,
      openBackdrop: false,
      openSearch: false
    })
  }

  hamburgerSwitch = () => {
    !this.state.openMenu ? this.openMenu() : this.closeMenu()
  }

  openSearch = () => {
    this.setState({ openSearch: true })
  }

  closeSearch = () => {
    this.setState({ openSearch: false })
  }

  searchSwitch = () => {
    !this.state.openSearch ? this.openSearch() : this.closeSearch()
  }

  render() {
    return (
      <Fragment>
        <MainControl 
          openMenu={this.openMenu} 
          closeMenu={this.closeMenu}
          open={this.state.openMenu} 
          backdrop={this.state.openBackdrop}
          menuList={this.menuList} />
        <Navigation       
          hamburgerSwitch={this.hamburgerSwitch}
          openSearch={this.state.openSearch}
          searchSwitch={this.searchSwitch}
          open={this.state.openMenu} />
      </Fragment>
    )
  };
};

export default ProfileContainer;