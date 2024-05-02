import { FunctionComponent } from 'react';
import './section_5.scss';
import { images } from '../../images/_images';

const Section5: FunctionComponent = () => {
  return (
    <div className="section_5">
      <img src={images.LetstalkFlashGL} />
      <div>
        <h1>Uzumaki?</h1>
        <p>
          @LetstalkFlashGL also imagined Kayra in a different light, picturing
          her as an Uzumaki Lady, adding an interesting twist to her look.
        </p>
        <br />
        <br />
        <p>“Uzumaki Lady?”</p>
      </div>
    </div>
  );
};

export default Section5;
