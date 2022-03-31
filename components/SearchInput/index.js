import { useState, useRef } from 'react';

import { TextInput } from '@mantine/core';
import { useSpotlight } from '@mantine/spotlight';
import { SearchIcon } from '@primer/octicons-react';
const SearchInput = ({ inputWidth, ...others }) => {
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
          backgroundColor: '#ddd',
          fontSize: '13px',
          paddingTop: '2px',
          color: 'red',
          border: 'none',
          '::placeholder': {
            color: '#000',
          },
        },
        rightSection: {
          color: '#4E4E4E',
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
