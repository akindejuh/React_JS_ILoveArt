import { FunctionComponent } from 'react';
import './section_4.scss';
import { images } from '../../images/_images';

const Section4: FunctionComponent = () => {
  return (
    <div className="section_4">
      <div>
        <h1>A Weapon?</h1>
        <p>
          @Artsu_kai even made a different version of Kayra, where her hair was
          used as a weapon and said
        </p>
        <br />
        <br />
        <p>“Ok but can she weaponize her hair”</p>
      </div>
      <img src={images.Artsu_kai} />
    </div>
  );
};

export default Section4;
