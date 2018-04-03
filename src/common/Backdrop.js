import React from 'react';

import '../App.scss';

const backdrop = ({closeMenu}) => ( <div className="backdrop" onClick={closeMenu} /> );

export default backdrop;