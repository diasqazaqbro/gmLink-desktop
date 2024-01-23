import { Delete } from './Delete/Delete';
import { Enter } from './Enter/Enter';
import sass from './Input.module.sass';

interface InputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
  children?: React.ReactNode;
  placeholder: string;
  value: string;
  type: string;
  className: string;
  onBlur: EventListener;
  id: string;
  name: string;
}

export const Input: React.FC<InputProps> = ({ onChange, onClear, children, placeholder, value, type, className, name,id, onBlur }) => {
  const enterProps = { onChange, placeholder, value, type, className, id, onBlur, name };
  const deleteProps = { onClear, className };

  return (
    <>
      <div className={sass.input}>
        <Enter {...enterProps} />
        <Delete {...deleteProps} />
      </div>
      {children}
    </>
  );
};

