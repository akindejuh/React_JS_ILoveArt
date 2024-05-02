import { FunctionComponent } from 'react';
import './image_tag.scss';

interface ImageTagProps {
  username: string;
}
const ImageTag: FunctionComponent<ImageTagProps> = ({ username }) => {
  return (
    <span className="image_tag">
      <h3>{username}</h3>
    </span>
  );
};

export default ImageTag;
