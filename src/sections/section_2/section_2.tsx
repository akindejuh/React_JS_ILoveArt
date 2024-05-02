import { FunctionComponent } from 'react';
import './section_2.scss';
import { images } from '../../images/_images';

const Section2: FunctionComponent = () => {
  return (
    <div className="section_2">
      <div className="about">
        <h1>About Muse</h1>
        <p>
          Kayra Theodore is more than just a model; she is a canvas for
          creativity. With her distinctive hairstyles and magnetic presence, she
          has captured the imagination of artists worldwide. Learn more about
          Kayra's journey and the inspiration behind her extraordinary hair
          transformations
        </p>
      </div>
      <img src={images._JessicaLouis_}></img>
      <img
        style={{
          marginLeft: 'auto',
        }}
        src={images.robrantula}></img>
    </div>
  );
};

export default Section2;
