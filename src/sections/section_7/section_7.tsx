import { FunctionComponent } from 'react';
import './section_7.scss';
import { images } from '../../images/_images';
import ImageArt from '../../components/image_art/image_art';

const Section7: FunctionComponent = () => {
  return (
    <div className="section_7">
      <div className="div1">
        <p className='p'>Art is</p>
        <p className="p beautiful">beautiful</p>
        <p className='p'>and so are</p>
        <p className='p'>you</p>
      </div>

      <div className="div2">
        <div className="img_1">
          <ImageArt image={images.midas_ht} username="@midas_ht" />
        </div>
        <div className="img_2">
          <ImageArt image={images.Artastronomer} username="@Artastronomer" />
        </div>
      </div>

      <div className="div3">
        <div className="img_3">
          <ImageArt image={images._ajdrawss} username="@_ajdrawss" />
        </div>
        <div className="img_4">
          <ImageArt image={images.southpauzart} username="@southpauzart" />
        </div>
      </div>
    </div>
  );
};

export default Section7;
