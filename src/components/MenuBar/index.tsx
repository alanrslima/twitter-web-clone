import React from 'react';
import {
  Container,
  Topside,
  Logo,
  MenuButton,
  HomeIcon,
  BellIcon,
  EmailIcon,
  FavoriteIcon,
  ProfileIcon,
  TweetButton,
  ExitIcon,
  Botside,
  Avatar,
  ProfileData,
} from './styles';

const MenuBar: React.FC = () => {
  return (
    <Container>
      <Topside>
        <Logo />
        <MenuButton>
          <HomeIcon />
          <span>Página inicial</span>
        </MenuButton>

        <MenuButton>
          <BellIcon />
          <span>Notificações</span>
        </MenuButton>

        <MenuButton>
          <EmailIcon />
          <span>Mensagens</span>
        </MenuButton>

        <MenuButton>
          <FavoriteIcon />
          <span>Favoritados</span>
        </MenuButton>

        <MenuButton className="active">
          <ProfileIcon />
          <span>Perfil</span>
        </MenuButton>

        <TweetButton outlined={false}>
          <span>Tweetar</span>
        </TweetButton>
      </Topside>
      <Botside>
        <Avatar />
        <ProfileData>
          <strong>Alan Lima</strong>
          <span>@alanrslima</span>
        </ProfileData>

        <ExitIcon />
      </Botside>
    </Container>
  );
};

export default MenuBar;
