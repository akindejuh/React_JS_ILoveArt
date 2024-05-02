import { FunctionComponent } from 'react';
import './section_6.scss';
import ImageTag from '../../components/image_tag/image_tag';
import ImageComp from '../../components/image_comp/image_comp';
import { images } from '../../images/_images';

const Section6: FunctionComponent = () => {
  return (
    <div className="section_6">
      <h1>Sketches</h1>
      <p>No colors, just amazing art</p>

      <div className="tag_carousel">
        <ImageTag username="@meetKAHEL" />
        <ImageTag username="@BaguettesMoist" />
        <ImageTag username="@dreyy_otunba" />
        <ImageTag username="@Swad_artss" />
        <ImageTag username="@aSmallCreek" />
      </div>

      <div className="img_carousel">
        <ImageComp image={images.meetKAHEL} />
        <ImageComp image={images.BaguettesMoist} />
        <ImageComp image={images.dreyy_otunba} />
        <ImageComp image={images.Swad_artss} />
        <ImageComp image={images.aSmallCreek} />
      </div>

      <div className="tag_carousel">
        <ImageTag username="@Ubakanwa_nzube" />
        <ImageTag username="@j_ukadilonu_art" />
        <ImageTag username="@vaile_valley" />
        <ImageTag username="@crimsoooo" />
        <ImageTag username="@Sweet_Pages" />
      </div>

      <div className="img_carousel">
        <ImageComp image={images.Ubakanwa_nzube} />
        <ImageComp image={images.j_ukadilonu_art} />
        <ImageComp image={images.vaile_valley} />
        <ImageComp image={images.crimsoooo} />
        <ImageComp image={images.Sweet_Pages} />
      </div>
    </div>
  );
};

export default Section6;
