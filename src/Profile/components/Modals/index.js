import React, { Fragment } from 'react';

import Veil from './Veil';
import Modal from './Modal';

import '../../style/Modals.css';

const modal = ({ openModal, closeModal, itemName }) => (
  <Fragment>
    { openModal && (<Veil closeModal={closeModal} />)}
    { openModal && (<Modal itemName={itemName} />)}
  </Fragment>
);

export default modal;