import { FunctionComponent } from 'react';
import './section_3.scss';
import ImageTag from '../../components/image_tag/image_tag';
import ImageComp from '../../components/image_comp/image_comp';
import { images } from '../../images/_images';

const Section3: FunctionComponent = () => {
  return (
    <div className="section_3">
      <h1>Art Gallery</h1>
      <p>
        Immerse yourself in a gallery of breathtaking illustrations inspired by
        Kayra's dynamic hairstyles. Each piece tells a story, reflecting the
        fusion of beauty, fashion, and artistic expression.
      </p>

      <div className="tag_carousel">
        <ImageTag username="@quai_png" />
        <ImageTag username="@TheeBlackBlur" />
        <ImageTag username="@sunieste" />
        <ImageTag username="@PatamYsa" />
        <ImageTag username="@Ashlly_mols" />
      </div>

      <div className="img_carousel">
        <ImageComp image={images.quai_png} />
        <ImageComp image={images.TheeBlackBlur} />
        <ImageComp image={images.sunieste} />
        <ImageComp image={images.PatamYsa} />
        <ImageComp image={images.Ashlly_mols} />
      </div>

      <div className="tag_carousel">
        <ImageTag username="@UcheAzunnaya" />
        <ImageTag username="@miles_eo" />
        <ImageTag username="@tori_amaru" />
        <ImageTag username="@fajemgiovanna" />
        <ImageTag username="@Modirwa_" />
      </div>

      <div className="img_carousel">
        <ImageComp image={images.UcheAzunnaya} />
        <ImageComp image={images.miles_eo} />
        <ImageComp image={images.tori_amaru} />
        <ImageComp image={images.fajemgiovanna} />
        <ImageComp image={images.Modirwa_} />
      </div>
    </div>
  );
};

export default Section3;
