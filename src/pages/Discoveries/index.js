import React from 'react';
import style from './style.module.scss';
import ExoPlanet from '../../components/ExoPlanet';
import Hero from '../../components/Hero';
import PlanetViewer from '../../components/PlanetViewer';

const Discoveries = () => {
  const state = React.useState(null);
  const [planetModal, setPlanetModal] = state;
  return (
    <div className={`container-sm ${style.main}`}>
      <h1>Discoveries</h1>
      <p>
        Earth's scientists and its space agencies are researching and making exciting discoveries of exoplanets every day! It is hoped that in tears to come we will discover one that can support life!
      </p>
      <p>
        Below some of the most recent discoveries of exoplanets can be seen
        below:
      </p>
      {planetModal !== null ? <PlanetViewer state={state} /> : null}
      <ExoPlanet stateSetter={(v) => setPlanetModal(v)} />
    </div>
  );
};

export default Discoveries;
