import React, { Component, Fragment } from 'react';

import MainControl from '../components/MainControl';
import Navigation from '../components/Navigation';
import Modals from '../components/Modals';
import Blocks from '../components/Blocks';

class ProfileContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openMenu: false,
      openBackdrop: false,
      openModal: false,
      openNavigationDrawer: false,
      openBlocksDrawer: false,
      openSearch: false,
      openName: false,
      itemName: '',
      itemDrawerName: ''
    };
  };

  menuList = [
    {name: 'chat',        icon: 'fa-comments'},
    {name: 'trophies',    icon: 'fa-trophy'},
    {name: 'settings',    icon: 'fa-cog'},
    {name: 'challenges',  icon: 'fa-handshake-o'},
    {name: 'check-in',    icon: 'fa-thumb-tack'},
    {name: 'ranks',       icon: 'fa-cubes'},
    {name: 'spots',       icon: 'fa-map-marker'},
    {name: 'friends',     icon: 'fa-users'}
  ];

  openModal = () => { this.setState({ openModal: true })};

  openNavigationDrawer = () => { this.setState({ openNavigationDrawer: true, openBackdrop: true })};
  openBlocksDrawer = () => { this.setState({ openBlocksDrawer: true })};

  challengesBlocksDrawer = (name) => {
    this.getItemNameBlocksDrawer(name);
    this.openBlocksDrawer();

  }

  spotsBlocksDrawer = (name) => {
    this.getItemNameBlocksDrawer(name);
    this.openBlocksDrawer();
  }

  chatBlocksDrawer = (name) => {
    this.getItemNameBlocksDrawer(name);
    this.openBlocksDrawer();
  }
  
  friendsBlocksDrawer = (name) => {
    this.getItemNameBlocksDrawer(name);
    this.openBlocksDrawer();
  }

  ranksBlocksDrawer = (name) => {
    this.getItemNameBlocksDrawer(name);
    this.openBlocksDrawer();
  }

  checkBlocksDrawer = (name) => {
    this.getItemNameBlocksDrawer(name);
    this.openBlocksDrawer();
  }

  settingsBlocksDrawer = (name) => {
    this.openModal();
    this.openNavigationDrawer();
  }

  trophiesBlocksDrawer = (name) => {
    this.getItemNameBlocksDrawer(name);
    this.openBlocksDrawer();
  }

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
      openSearch: false,
      openModal: false,
      openNavigationDrawer: false
    })
  }

  closeModal = () => { this.closeMenu(); };
  closeBlocksDrawer = () => { this.setState({ openBlocksDrawer: false }) };
  closeSearch = () => { this.setState({ openSearch: false }) };
  closeName = () => { this.setState({ openName: false }) };

  hamburgerSwitch = () => { !this.state.openNavigationDrawer ? this.openNavigationDrawer() : this.closeMenu() };

  openSearch = () => { this.setState({ openSearch: true }) };

  searchSwitch = () => { !this.state.openSearch ? this.openSearch() : this.closeSearch() };

  openName = () => { this.setState({ openName: true }) };  

  getItemNameProfile = (name) => {
    this.setState({
      openName: true,
      itemName: name
    })
  }

  getItemNameNavigationDrawer = (name) => {
    this.setState({ itemName: name });
    this.openModal();
  }

  getItemNameBlocksDrawer = (name) => {
    this.setState({ itemDrawerName: name });
  }

  assignFuncToName = (name) => {
    switch(name) {
      case 'chat':
        return this.chatBlocksDrawer(name);
      case 'settings':
        return this.settingsBlocksDrawer(name);
      case 'trophies':
        return this.trophiesBlocksDrawer(name);
      case 'challenges':
        return this.challengesBlocksDrawer(name);
      case 'check-in':
        return this.checkBlocksDrawer(name);
      case 'spots':
        return this.spotsBlocksDrawer(name);
      case 'ranks':
        return this.ranksBlocksDrawer(name);
      case 'friends':
        return this.friendsBlocksDrawer(name);
      default:
        return null;
    }
  }

  render() {
    return (
      <Fragment>
        <MainControl 
          openMenu={this.openMenu} 
          closeMenu={this.closeMenu}
          open={this.state.openMenu}
          backdrop={this.state.openBackdrop}
          menuList={this.menuList} 
          itemName={this.state.itemName}
          openName={this.openName}
          closeName={this.closeName}
          getItemName={this.getItemNameProfile}
          name={this.state.openName}
          assignFuncToName={this.assignFuncToName} />
        <Navigation       
          hamburgerSwitch={this.hamburgerSwitch}
          openModal={this.state.openModal} 
          openSearch={this.state.openSearch}
          openDrawer={this.state.openNavigationDrawer}
          menuList={this.menuList}
          searchSwitch={this.searchSwitch}
          getItemName={this.getItemNameNavigationDrawer}
          assignFuncToName={this.assignFuncToName} />
        <Modals
          closeModal={this.closeModal} 
          openModal={this.state.openModal}
          itemName={this.state.itemName} />
        <Blocks 
          openDrawer={this.state.openBlocksDrawer}
          itemName={this.state.itemDrawerName}
          closeBlocksDrawer={this.closeBlocksDrawer} />
      </Fragment>
    )
  };
};

export default ProfileContainer;
