import { useState, useRef } from 'react';

import { TextInput } from '@mantine/core';
import { useMantineColorScheme } from '@mantine/core';
import { useSpotlight } from '@mantine/spotlight';

import { SearchIcon } from '@primer/octicons-react';

const SearchInput = ({ inputWidth, ...others }) => {
  const { colorScheme } = useMantineColorScheme();
  const isThemeDark = colorScheme === 'dark';
  const spotlight = useSpotlight();
  return (
    <TextInput
      {...others}
      styles={{
        wrapper: {
          minWidth: '340px',
          width: inputWidth,
        },
        input: {
          backgroundColor: isThemeDark ? '#2c2e33' : '#fff',
          fontSize: '13px',
          paddingTop: '2px',
          border: isThemeDark ? 'none' : '1px solid #dee2e6',
          '::placeholder': {
            color: '#909296',
          },
        },
        rightSection: {
          color: '#909296',
        },
      }}
      placeholder="رویداد مورد نظر خود را جستجو کنید ..."
      rightSection={<SearchIcon size={18} />}
      onClick={(e) => {
        e.target.blur();
        spotlight.openSpotlight();
      }}
    />
  );
};

export default SearchInput;
