import React from 'react';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Discoveries from './pages/Discoveries';
import Home from './pages/Home';

const NavOptions = ['Cosmos', 'Discoveries'];
const Router = (props) => {
  const [RouterState, setRouterState] = React.useState(NavOptions[0]);
  return (
    <>
      <Hero />
      <NavBar
        options={NavOptions}
        update={(v) => setRouterState(NavOptions[v])}
        selected={RouterState}
      />
      {RouterState === 'Cosmos' && <Home />}
      {RouterState === 'Discoveries' && <Discoveries />}
    </>
  );
};

export default Router;
