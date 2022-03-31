import { useState } from 'react';
import { Popover, Button, Avatar, Text, Divider } from '@mantine/core';
import { useNotifications } from '@mantine/notifications';
import useAuth from '../../hooks/useAuth';
import useAxios from '../../hooks/useAxios';

import { SignOutIcon, PersonIcon } from '@primer/octicons-react';

const HeaderMenu = () => {
  const notifications = useNotifications();
  const axios = useAxios();
  const { auth, setAuth } = useAuth();
  const { user } = auth;
  const [userNavOpend, setUserNavOpend] = useState(false);

  const handleSignOut = () => {
    setUserNavOpend((o) => !o);
    axios
      .post('/auth/logout')
      .then(() => {
        setAuth({});
        navigate('/login', { replace: true });
      })
      .catch((error) => {
        notifications.showNotification({
          color: 'red',
          title: 'خطا در عملیات خروج از حساب کاربری',
          message: error.response.data.message,
        });
      });
  };

  const RenderUser = ({ name, setUserNavOpend }) => {
    return (
      <div
        onClick={() => setUserNavOpend((o) => !o)}
        style={{
          display: 'flex',
          marginLeft: '15px',
          cursor: 'pointer',
          alignItems: 'center',
        }}
      >
        <Avatar style={{ marginLeft: 13 }} color="purple">
          {name
            .split(' ')
            .map((part) => part.charAt(0).toUpperCase())
            .slice(0, 2)
            .join('')}
        </Avatar>
        <Text>{name}</Text>
      </div>
    );
  };

  return (
    <Popover
      opened={userNavOpend}
      onClose={() => setUserNavOpend(false)}
      position="bottom"
      placement="center"
      transition="pop-top-right"
      target={
        <RenderUser name="امین رضائی" setUserNavOpend={setUserNavOpend} />
      }
    >
      <Button
        styles={{
          inner: {
            justifyContent: 'space-between',
          },
        }}
        onClick={() => {
          setUserNavOpend(false);
          navigate('/profile', { replace: true });
        }}
        variant="subtle"
        color="blue"
        fullWidth
        rightIcon={<PersonIcon size={16} />}
      >
        حساب کاربری
      </Button>
      <Divider variant="dashed" my="xs" />
      <Button
        styles={{
          inner: {
            justifyContent: 'space-between',
          },
        }}
        onClick={() => handleSignOut()}
        variant="light"
        color="red"
        fullWidth
        rightIcon={<SignOutIcon size={16} />}
      >
        خروج
      </Button>
    </Popover>
  );
};

export default HeaderMenu;
