import { FunctionComponent } from 'react';
import './header.scss';
import kemi_dp from '../../images/header/kemi_dp.png';

const Header: FunctionComponent = () => {
  return (
    <div className="header">
      <p>IloveArt</p>

      <span>
        <img src={kemi_dp} />
        <a href="https://twitter.com/kemsdesigns">@kemsdesigns</a>
      </span>
    </div>
  );
};

export default Header;
