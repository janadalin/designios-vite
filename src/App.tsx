import { Routes, Route, useMatch } from 'react-router-dom';

import './App.scss';

import Header from './components/Header';
import Carousel from './components/Carousel';
import Main from './components/Main';
import Footer from './components/Footer';

import HomePage from './pages/Home';
import LiturgiaPage from './pages/Liturgia';
import BibliaPage from './pages/Biblia';
import PalavraDia from './components/PalavraDia/Details';

function Dashboard() {
  const isHome = useMatch('/');

  return (
    <>
      <Header position={isHome ? 'fixed' : 'sticky'}/>
      {isHome ? <Carousel /> : null}
      <Main />
      <Footer />
    </>
  );
};

export default () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />}>
        <Route index element={<HomePage />} />
        <Route path='liturgia' element={<LiturgiaPage />} />
        <Route path='biblia' element={<BibliaPage />} />
        <Route path='palavra' element={<PalavraDia />} />
      </Route>
    </Routes>
  );
};