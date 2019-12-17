import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import Spin from '@iso/ui/Antd/Spin/Spin';
import Modal from '@iso/ui/Antd/Modal/Modal';
import Container from '@iso/ui/UI/Container/Container';
import AvatarCard from '@iso/components/AvatarCard/AvatarCard';
import Wrapper, { Banner, Navigation, ContentWrapper } from './Profile.styles';
import { gql } from 'apollo-boost';

const GET_PROFILE_OF_CURRENT_USER = gql`
  query {
    __schema {
      types {
        name
        kind
        description
        fields {
          name
        }
      }
    }
  }
`;

export default function Profile() {
  const { data, loading, error } = useQuery(GET_PROFILE_OF_CURRENT_USER, {
    variables: { number_of_repos: 3 },
  });

  const [active, setActive] = useState('post');
  const [visible, setVisible] = useState(false);
  if (loading || !data || !data.user) console.log(data);
  return (
    <div
      style={{
        minHeight: '150px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Spin />
    </div>
  );
  if (error) return `Error! ${error.message}`;

  const handleMenu = type => {
    if (type === 'post') {
      setActive(type);
    }
    if (type === 'followers') {
      setActive(type);
      setVisible(true);
    }
    if (type === 'following') {
      setActive(type);
      setVisible(true);
    }
  };

  const handleCancel = () => {
    setVisible(false);
    setActive('post');
  };

  const {
    name,
    username,
    avatar,
    cover_photo,
    posts,
    followers,
    following,
  } = data.user;

  return (
    <Wrapper>
      <Banner
        className="profile-banner"
        style={{ backgroundImage: `url(${cover_photo})` }}
      >
        <Container className="container">
          <AvatarCard avatar={avatar} name={name} username={username} />
        </Container>
      </Banner>

      <Navigation className="navigation">
        <Container className="container">
          <ul className="menu">
            <li
              className={active === 'post' ? 'active' : ''}
              onClick={() => handleMenu('post')}
            >
              <strong>{posts && posts.length}</strong> Posts
            </li>
            <li
              className={active === 'followers' ? 'active' : ''}
              onClick={() => handleMenu('followers')}
            >
              <strong>{followers && followers.length}</strong> Followers
            </li>
            <li
              className={active === 'following' ? 'active' : ''}
              onClick={() => handleMenu('following')}
            >
              <strong>{following && following.length}</strong> Following
            </li>
          </ul>
        </Container>
      </Navigation>

      <ContentWrapper>
        <Container className="container">
          <Modal
            wrapClassName="follow-modal"
            visible={visible}
            onCancel={handleCancel}
            footer={null}
          ></Modal>
        </Container>
      </ContentWrapper>
    </Wrapper>
  );
}
