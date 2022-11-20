import style from './App.module.scss';
import React from 'react';
import Router from './Router';

const App = () => (
  <div className={style.main}>
    <Router />
  </div>
);

export default App;
