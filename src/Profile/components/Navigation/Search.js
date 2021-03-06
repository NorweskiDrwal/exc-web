import React from 'react';

import { Button } from 'reactstrap';

const search = ({ openSearch, searchSwitch }) => (
  <div className="search">
    <div className={"search__bar " + (openSearch && 'search__bar--open')}>
      <input placeholder="Type in the searched phrase" />
    </div>
    <Button className="search__btn circle" color="warning" onClick={searchSwitch} >
      { !openSearch && (<i className="fa fa-search" aria-hidden="true" /> )}
      { openSearch && (<i className="fa fa-times" aria-hidden="true" /> )}    
    </Button>
  </div>
);

export default search;