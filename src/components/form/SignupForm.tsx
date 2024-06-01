'use client';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchema } from '../../utils/validationSchema';
import FormField from './FormField';
import FormSelect from './FormSelect';

interface IFormInput {
  fullName: string;
  gender: string;
  phone: string;
  email: string;
  street: string;
  number: string;
  complement?: string;
  zipCode: string;
  neighborhood: string;
  city: string;
  state: string;
}

const SignUpForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    // Aqui você pode fazer a submissão dos dados, como enviar para uma API
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormField
        label='Nome Completo'
        name='fullName'
        register={register}
        error={errors.fullName}
      />
      <FormSelect
        label='Sexo'
        name='gender'
        options={[
          { value: 'male', label: 'Masculino' },
          { value: 'female', label: 'Feminino' },
        ]}
        register={register}
        error={errors.gender}
      />
      <FormField
        label='Telefone'
        name='phone'
        register={register}
        error={errors.phone}
      />
      <FormField
        label='E-mail'
        name='email'
        register={register}
        error={errors.email}
      />
      <FormField
        label='Rua'
        name='street'
        register={register}
        error={errors.street}
      />
      <FormField
        label='Número'
        name='number'
        register={register}
        error={errors.number}
      />
      <FormField label='Complemento' name='complement' register={register} />
      <FormField
        label='CEP'
        name='zipCode'
        register={register}
        error={errors.zipCode}
      />
      <FormField
        label='Bairro'
        name='neighborhood'
        register={register}
        error={errors.neighborhood}
      />
      <FormField
        label='Cidade'
        name='city'
        register={register}
        error={errors.city}
      />
      <FormField
        label='Estado'
        name='state'
        register={register}
        error={errors.state}
      />

      <button type='submit'>Cadastrar</button>
    </form>
  );
};

export default SignUpForm;

