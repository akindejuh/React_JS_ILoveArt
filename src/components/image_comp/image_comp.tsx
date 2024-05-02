import { FunctionComponent } from 'react';

interface ImageCompProps {
  image: string;
}

const ImageComp: FunctionComponent<ImageCompProps> = ({ image }) => {
  return (
    <div
      style={{
        position: 'relative',
        marginLeft: 5,
        marginRight: 5,
      }}>
      <img
        style={{
          width: '100%',
          height: '100%',
          minWidth: '100%',
          minHeight: '100%',
          backgroundSize: 'contain',
        }}
        src={image}
      />
    </div>
  );
};

export default ImageComp;
