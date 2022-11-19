import style from './App.module.scss';
import Home from './pages/Home';
import Hero from './components/Hero';
import ExoPlanet from './components/ExoPlanet';

const App = () => (
  <div className={style.main}>
    <Hero />
    <Home />
    <ExoPlanet />
  </div>
);

export default App;
