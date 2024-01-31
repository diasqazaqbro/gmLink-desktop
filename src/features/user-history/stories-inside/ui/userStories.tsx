import Stories from 'stories-react';
import sass from './userStories.module.sass'
import { FC } from 'react';

interface PropsStory {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>
}

const storySource = [
  {
    type: 'image',
    duration: 6000,
    url: 'https://images.pexels.com/photos/9733197/pexels-photo-9733197.jpeg?w=300',
  },
  {
    type: 'video',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-man-dancing-under-changing-lights-1240-large.mp4',
    duration: 28000,
  },
  {
    type: 'image',
    duration: 6000,
    url: 'https://images.pexels.com/photos/9733197/pexels-photo-9733197.jpeg?w=300',
  },
  {
    type: 'video',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-mother-with-her-little-daughter-eating-a-marshmallow-in-nature-39764-large.mp4',
    duration: 10000,
  },
  {
    type: 'video',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-family-walking-together-in-nature-39767-large.mp4',
    duration: 10000,
  },
  {
    type: 'video',
    duration: 6000,
    url: 'https://assets.mixkit.co/videos/preview/mixkit-girl-in-neon-sign-1232-large.mp4',
  },
  {
    duration: 7000,
    type: 'image',
    url: 'https://images.pexels.com/photos/9470805/pexels-photo-9470805.jpeg?w=300',
  },
]

export const UserStories:FC<PropsStory> = (props) => {
  const { active, setActive } = props;
  return (
    <div className={`${active ? sass.active : sass.stories}`} onClick={() => setActive(false)} >
      <Stories width="100%" height="100%" stories={storySource} />
    </div>
  )
}