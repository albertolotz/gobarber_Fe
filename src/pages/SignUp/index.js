import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import logo1 from '~/assets/logo1.png';
import { signUpRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  nome: Yup.string().required('Nome é obrigatório!'),
  email: Yup.string()
    .email('Insira um email Válido')
    .required('e-mail é obrigatório'),
  password: Yup.string()
    .min(6, 'Senha minima 6 letras')
    .required('senha é obrigatória'),
});

export default function SignUp() {
  const dispatch = useDispatch();

  function handleSubmit({ nome, email, password }) {
    dispatch(signUpRequest(nome, email, password));
  }

  return (
    <>
      <img src={logo1} alt="GoBarber" width={80} />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="nome" placeholder="Nome Competo" />
        <Input name="email" type="Email" placeholder="Seu Email" />
        <Input name="password" type="password" placeholder="Senha" />

        <button type="submit">Criar Conta</button>
        <Link to="/">Já tenho um login</Link>
      </Form>
    </>
  );
}
