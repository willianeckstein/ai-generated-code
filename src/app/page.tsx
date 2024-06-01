'use client';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// Definindo o tipo do formulário
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

// Schema de validação do Yup
const schema = yup.object().shape({
  fullName: yup.string().required('Nome completo é obrigatório'),
  gender: yup.string().required('Sexo é obrigatório'),
  phone: yup
    .string()
    .required('Telefone é obrigatório')
    .matches(/^\(\d{2}\)\s\d{4,5}-\d{4}$/, 'Telefone inválido'),
  email: yup.string().required('E-mail é obrigatório').email('E-mail inválido'),
  street: yup.string().required('Rua é obrigatória'),
  number: yup.string().required('Número é obrigatório'),
  complement: yup.string(),
  zipCode: yup
    .string()
    .required('CEP é obrigatório')
    .matches(/^\d{5}-\d{3}$/, 'CEP inválido'),
  neighborhood: yup.string().required('Bairro é obrigatório'),
  city: yup.string().required('Cidade é obrigatória'),
  state: yup.string().required('Estado é obrigatório'),
});

const Home: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    // Aqui você pode fazer a submissão dos dados, como enviar para uma API
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Nome Completo:</label>
        <input {...register('fullName')} />
        {errors.fullName && <p>{errors.fullName.message}</p>}
      </div>

      <div>
        <label>Sexo:</label>
        <select {...register('gender')}>
          <option value=''>Selecione</option>
          <option value='male'>Masculino</option>
          <option value='female'>Feminino</option>
        </select>
        {errors.gender && <p>{errors.gender.message}</p>}
      </div>

      <div>
        <label>Telefone:</label>
        <input {...register('phone')} />
        {errors.phone && <p>{errors.phone.message}</p>}
      </div>

      <div>
        <label>E-mail:</label>
        <input {...register('email')} />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <label>Rua:</label>
        <input {...register('street')} />
        {errors.street && <p>{errors.street.message}</p>}
      </div>

      <div>
        <label>Número:</label>
        <input {...register('number')} />
        {errors.number && <p>{errors.number.message}</p>}
      </div>

      <div>
        <label>Complemento:</label>
        <input {...register('complement')} />
      </div>

      <div>
        <label>CEP:</label>
        <input {...register('zipCode')} />
        {errors.zipCode && <p>{errors.zipCode.message}</p>}
      </div>

      <div>
        <label>Bairro:</label>
        <input {...register('neighborhood')} />
        {errors.neighborhood && <p>{errors.neighborhood.message}</p>}
      </div>

      <div>
        <label>Cidade:</label>
        <input {...register('city')} />
        {errors.city && <p>{errors.city.message}</p>}
      </div>

      <div>
        <label>Estado:</label>
        <input {...register('state')} />
        {errors.state && <p>{errors.state.message}</p>}
      </div>

      <button type='submit'>Cadastrar</button>
    </form>
  );
};

export default Home;

