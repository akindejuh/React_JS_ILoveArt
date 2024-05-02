import { FunctionComponent } from 'react';
import './app.scss';

import Header from '../sections/header/header';

import Section1 from '../sections/section_1/section_1';
import Section2 from '../sections/section_2/section_2';
import Section3 from '../sections/section_3/section_3';
import Section4 from '../sections/section_4/section_4';
import Section5 from '../sections/section_5/section_5';
import Section6 from '../sections/section_6/section_6';
import Section7 from '../sections/section_7/section_7';

import Footer from '../sections/footer/footer';

const App: FunctionComponent = () => {
  return (
    <div className="app">
      <Header />

      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />

      <Footer />
    </div>
  );
};

export default App;
