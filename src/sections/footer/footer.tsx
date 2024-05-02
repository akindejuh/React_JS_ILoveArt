import { FunctionComponent } from 'react';
import './footer.scss';

const Footer: FunctionComponent = () => {
  return (
    <div className="footer">
      <div>
        <h1>Need an artist on a project?</h1>
        <p>
          You can do that by simply looking up any one of them on Twitter (X).
        </p>
      </div>
      <p className='follow'>Follow @kemsdesigns for more</p>
    </div>
  );
};

export default Footer;
