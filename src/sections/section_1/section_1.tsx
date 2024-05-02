import { FunctionComponent } from 'react';
import './section_1.scss';

const Section1: FunctionComponent = () => {
  return (
    <div className="section_1">
      <div className="image">
        <span>
          <p>AMAZING ART OF</p>
          <p className="kayra">{' KAYRA'}</p>
        </span>

        <p className='username'>@deanne_go</p>
      </div>
    </div>
  );
};

export default Section1;
