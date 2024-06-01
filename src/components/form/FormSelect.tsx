import React from 'react';
import { FieldError, UseFormRegister } from 'react-hook-form';

interface FormSelectProps {
  label: string;
  name: string;
  options: { value: string; label: string }[];
  register: UseFormRegister<any>;
  error?: FieldError;
}

const FormSelect: React.FC<FormSelectProps> = ({
  label,
  name,
  options,
  register,
  error,
}) => {
  return (
    <div>
      <label>{label}:</label>
      <select {...register(name)}>
        <option value=''>Selecione</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p>{error.message}</p>}
    </div>
  );
};

export default FormSelect;

