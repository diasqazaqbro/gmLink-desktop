import { memo, useCallback, useState } from 'react'
import { SelectPhoto } from '../../../../features/select-photo'
import { Badges } from '../../../../shared/ui/Badges/Badges'
import { Button } from '../../../../shared/ui/Button/Button'
import { Contact } from '../../../../shared/ui/Contact/Contact'
import sass from './SPhoto.module.sass'
import { useNavigate } from 'react-router-dom'

export const SPhoto = memo(() => {
  const [images, setImages] = useState<File[]>([]);
  const [avatarSelected, setAvatarSelected] = useState<boolean>(false);
  const navigate = useNavigate()

  const handleAddPhoto = useCallback((image: File) => {
    if (images.length < 4) {
      setImages([image, ...images])
      if (!avatarSelected) {
        setAvatarSelected(!avatarSelected)
      }
    }
  }, [images])
  const handleNextClick = () => {
    if (avatarSelected) {
      navigate('/registration/gender')
    }
  }
  const handleDeletePhoto = useCallback((index: number) => {
    const updatedImages = [...images]
    updatedImages.splice(index, 1)
    setImages(updatedImages)
    if (updatedImages.length === 0) {
      setAvatarSelected(false)
    }
  }, [images])

  return (
    <div className={sass.background}>
        <Badges routePath={'/registration/password'} className={sass.badge} />
      <div className={sass.container}>
        <div className={sass.inner}>
          <div className={sass.inner_text}>
            <h1>Select Photos</h1>
            <p>Add at least 1 photo to continue</p>
          </div>
          <div className={sass.select_grid}>
            {images.map((image, index) => (
              <SelectPhoto 
                key={index}
                image={image}
                onDelete={() => handleDeletePhoto(index)}
              />
            ))}
            {images.length < 4 && <SelectPhoto onAdd={handleAddPhoto} />}
          </div>
          <div className={sass.btn}>
            <Button label='Next' disabled={!avatarSelected} className={`${avatarSelected ? sass.active : ''}`} onClick={handleNextClick}/>
          </div>
          <Contact label='Contact Us' routePath='/report' className={sass.inner_contact}/>
        </div>
      </div>
    </div>
  )
})