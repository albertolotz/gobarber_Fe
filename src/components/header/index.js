import React from 'react';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux';
import Notification from '~/components/notifications';
import logo from '~/assets/logo-purple.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  const profile = useSelector(state=>state.user.profile);

  let urlProfile = '';
  try{
      if(profile.avatar.url) urlProfile=profile.avatar.url;
      }
  catch (err)
    {
      urlProfile='https://api.adorable.io/avatars/50/abott@adorable.png';
    }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Notification />
          <Profile>
            <div>
              <strong>{profile.nome}</strong>
              <Link to="/profile">Meu Perfil</Link>
            </div>
            <img src={ urlProfile } alt='Avatar'/>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
