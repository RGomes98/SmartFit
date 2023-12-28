import { Footer } from './components/Footer/Footer';
import { Navbar } from './components/Navbar/Navbar';
import { Main } from './components/Main/Main';
import { Fragment } from 'react';

import './stylesheets/globals.scss';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Main />
      <Footer />
    </Fragment>
  );
}

export default App;
