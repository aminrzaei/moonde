import { UnstyledButton, Group, ThemeIcon, Text } from '@mantine/core';

const NavLink = ({ icon, label, isActive, url }) => {
  return (
    <UnstyledButton
      onClick={() => {
        if (isActive) return;
        console.log(url);
      }}
      sx={(theme) => ({
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        transition: 'all 0.3s ease',
        padding: '8px 12px 6px 12px',
        marginBottom: '5px',
        borderRadius: theme.radius.sm,
        backgroundColor: isActive ? '#CAFFF1' : 'transparent',
        color: isActive
          ? '#1F986D'
          : theme.colorScheme === 'dark'
          ? theme.colors.dark[0]
          : '#929292',

        '&:hover': {
          backgroundColor: isActive
            ? '#CAFFF1'
            : theme.colorScheme === 'dark'
            ? theme.colors.dark[6]
            : theme.colors.gray[4],
        },
      })}
    >
      <Text size="md">{label}</Text>
      {icon}
    </UnstyledButton>
  );
};

export default NavLink;
