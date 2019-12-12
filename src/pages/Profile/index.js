import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import {signOut} from '~/store/modules/auth/actions';
import { updateProfileRequest } from '~/store/modules/Users/actions';
import AvatarInput from './AvatarInput';

import { Container } from './styles';

export default function Profile() {
  const dispach = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    dispach(updateProfileRequest(data));
  }

  function handleSignOut(){
    dispach(signOut())
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <AvatarInput name="avatar_id" />
        <Input name="nome" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="Email" />

        <hr />

        <Input
          type="password"
          name="oldPassword"
          placeholder="Sua senha atual"
        />
        <Input type="password" name="password" placeholder="Nova Senha" />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Repita a Nova senha"
        />

        <button type="submit">Atualizar Perfil</button>
      </Form>
      <button onClick={handleSignOut} type="button">Sair do GoBarber</button>
    </Container>
  );
}
