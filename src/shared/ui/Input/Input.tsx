import { FocusEventHandler, memo } from 'react';
import { Delete } from './Delete/Delete';
import { Enter } from './Enter/Enter';
import sass from './Input.module.sass';

interface InputProps {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClear?: () => void;
  children?: React.ReactNode;
  placeholder: string;
  value?: string;
  type: string;
  className?: string;
  onBlur?: FocusEventHandler;
  id?: string;
  name?: string;
}

export const Input: React.FC<InputProps> = memo(({ onChange, onClear, children, value, placeholder, type, className, id, name, onBlur }) => {
  const enterProps = { onChange, placeholder, type, className, value, id, name, onBlur };
  const deleteProps = { onClear };

  return (
    <>
      <div className={sass.input}>
        <Enter {...enterProps} />
        <Delete {...deleteProps} />
      </div>
      {children}
    </>
  );
});

