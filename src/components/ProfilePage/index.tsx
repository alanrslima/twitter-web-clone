import React from 'react';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  FollowImage,
  EditButton,
} from './styles';
import Feed from '../Feed';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>
        <h1>Alan Lima</h1>
        <h2>@alanrslima</h2>
        <p>
          Developer at <a href="https://coopersystem.com.br/">@Coopersystem</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Brasília, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 30 de setembro em 1997
          </li>
        </ul>

        <FollowImage>
          <span>
            seguindo <strong>100</strong>
          </span>
          <span>
            <strong>600 </strong>seguidores
          </span>
        </FollowImage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
