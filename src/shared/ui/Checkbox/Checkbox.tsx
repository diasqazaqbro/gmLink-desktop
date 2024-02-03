import { useRef, useState } from 'react';
import { Checkbox } from '@chakra-ui/checkbox';
import sass from './Checkbox.module.sass';

export const CheckBox = () => {
  const dataRef = useRef([
    { id: 1, value: 'From A-Z', checkbox: false },
    { id: 2, value: 'By the hour in the game', checkbox: true },
    { id: 3, value: 'Leave only favorites', checkbox: false },
    { id: 4, value: 'Leave only favorites', checkbox: false }
  ]);
  const [data, setData] = useState(dataRef.current);


  return (
    <div className={sass.unknown}>
      {data.map((value, id) => (
        <div className={sass.inner} key={id}>
          <h1 className={sass.text}>{value.value}</h1>
          <Checkbox className={sass.checkbox} style={{ display: 'flex', flexDirection: 'row-reverse' }} />
        </div>
      ))}
    </div>
  );
};

