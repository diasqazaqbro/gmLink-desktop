import { ChangeEvent, memo,  useState } from "react";
import sass from "./PinCode.module.sass";
import { useNavigate } from "react-router-dom";

export const PinCode = memo(() => {
  const [inputs, setInputs] = useState(["", "", "", "", ""]);
  const navigate = useNavigate()
  const onChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    const newInputs = [...inputs];

    if (value.length === 1 && index < 5) {
      newInputs[index] = value;
      setInputs(newInputs);
      
      const nextInput = document.getElementById(`pinInput${index + 1}`);
      if (nextInput) {
        nextInput.focus();
      }
    } else if (value.length === 0) {
      newInputs[index] = "";
      setInputs(newInputs);
      
      if (index > 0) {
        const prevInput = document.getElementById(`pinInput${index - 1}`);
        if (prevInput) {
          prevInput.focus();
        }
      }
    }
    // Здесь логика Например если пин код будет равен тому что пользователю пришло в смс то он пидор проходит дальше
    const pinCode = newInputs.join("");
    if (pinCode === "22222") {
      navigate('/registration/name');
    }
  }

  return (
    <div className={sass.input__container}>
      {inputs.map((value, index) => (
        <input
          key={index}
          type="tel"
          autoComplete='off'
          id={`pinInput${index}`}
          value={value}
          onChange={(e) => onChange(e, index)}
          className={sass.pin__input}
        />
      ))}
    </div>
  );
});