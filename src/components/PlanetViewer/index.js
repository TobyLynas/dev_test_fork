import React from 'react';
import useOutsideFocus from '../hooks/useOutsideFocus';
import style from './style.module.scss';

const PlanetViewer = (props) => {
  const [modalData, setModalData] = props.state;
  const modalRef = React.useRef(null);
  useOutsideFocus(modalRef, (v) => setModalData(v));
  return (
    <div ref={modalRef} className={style.modal}>
      <button
        className={style.closeButton}
        onClick={() => {
          setModalData(null);
        }}>
        &times;
      </button>
      <h3>{modalData.pl_name}</h3>
      <b3>Discovered by: {modalData.disc_facility}</b3>
      <br />
      <b3>Released on: {modalData.releasedate}</b3>
      <br />
      <b3>
        This expoplanet has a radius {modalData.pl_rade} times that of earth.
      </b3>
    </div>
  );
};

export default PlanetViewer;
