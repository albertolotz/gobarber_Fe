import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import logo1 from '~/assets/logo1.png';

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
  function handleSubmit(data) {
    console.tron.log(data);
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
