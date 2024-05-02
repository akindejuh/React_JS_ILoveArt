import { FunctionComponent } from 'react';

interface ImageArtProps {
  image: string;
  username: string;
}

const ImageArt: FunctionComponent<ImageArtProps> = ({ image, username }) => {
  return (
    <div
      style={{
        position: 'relative',
        display: 'flex'
      }}>
      <img
        style={
          {
            width: '100%',
            height: '100%',
            minWidth: '100%',
            minHeight: '100%',
            backgroundSize: 'contain'
          }
        }
        src={image}
        />
      <p
        style={{
          fontFamily: 'OpenSans-600',
          fontSize: 20,
          marginTop: 'auto',
          position: 'absolute',
          bottom: 30,
          color: 'white',
          left: '50%',
          transform: 'translateX(-50%)',
        }}>
        {username}
      </p>
    </div>
  );
};

export default ImageArt;
