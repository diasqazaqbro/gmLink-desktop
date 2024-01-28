import { useRef } from 'react';
import Avatar from '../../../../public/images/AvatarSelect.svg'; // Подставьте правильный путь к изображению
import { Badge } from '../../../shared/ui/Icon/Icon';
import sass from './SelectPhoto.module.sass';

interface Props {
  image?: File;
  onAdd?: (image: File) => void;
  onDelete?: () => void;
}

export const SelectPhoto = ({ image, onAdd, onDelete }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0] && onAdd) {
      const selectedImage = event.target.files[0];
      onAdd(selectedImage);
    }
  };

  const handleImageClick = () => {
        if (onDelete) {
          onDelete()
        } if (!onDelete) {
          inputRef.current?.click();
        }
      };

  let classNames = `${sass.add_photo}`;
  if (image) {
    classNames += ` ${sass.rotated_x}`;
  } else {
    classNames += ` ${sass.rotated_plus}`;
  }

  return (
    <div className={sass.select_photo} style={{ cursor: 'pointer' }}>
      {image ? (
        <img src={URL.createObjectURL(image)} alt="Selected Image" className={sass.img_after} />
      ) : (
        <img src={Avatar} alt="Default Avatar" className={`${sass.img_before} ${sass.rotated_x}`} />
      )}
      <div className={classNames} onClick={handleImageClick}>
        <Badge />
      </div>
      <input type="file" ref={inputRef} onChange={handleImageChange} style={{ display: 'none' }} />
    </div>
  );
};


