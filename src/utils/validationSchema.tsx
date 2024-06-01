import * as yup from 'yup';

export const validationSchema = yup.object().shape({
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

