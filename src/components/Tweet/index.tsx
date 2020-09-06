import React from 'react';

import {
  Container,
  Retweeted,
  RocketseatIcon,
  Body,
  Avatar,
  Description,
  Header,
  CommentIcon,
  Icons,
  Content,
  ImageContent,
  Status,
  RetweetIcon,
  LikeIcon,
  Dot,
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RocketseatIcon />
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar></Avatar>
        <Content>
          <Header>
            <strong>Alan Lima</strong>
            <span>@alanrslima</span>
            <Dot />
            <time>27 de jun</time>
          </Header>
          <Description>Foguete não tem ré</Description>
          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              18
            </Status>
            <Status>
              <RetweetIcon />
              18
            </Status>
            <Status>
              <LikeIcon />
              999
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
