import React from 'react';
import { Link } from 'react-router-dom';
import Notification from '~/components/notifications';
import logo from '~/assets/logo-purple.svg';

import { Container, Content, Profile } from './styles';

export default function header() {
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
              <strong>Alberto Lotz</strong>
              <Link to="/profile">Meu Perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="Alberto Lotz"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
