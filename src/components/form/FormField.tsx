import React from 'react';
import { FieldError, UseFormRegister } from 'react-hook-form';

interface FormFieldProps {
  label: string;
  name: string;
  register: UseFormRegister<any>;
  error?: FieldError;
  type?: string;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  register,
  error,
  type = 'text',
}) => {
  return (
    <div>
      <label>{label}:</label>
      <input type={type} {...register(name)} />
      {error && <p>{error.message}</p>}
    </div>
  );
};

export default FormField;

