'use client'

import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { HiSortAscending } from 'react-icons/hi'

export default function CustomMenu ({
  selectedOption,
  onSelect
}: {
  selectedOption: string
  onSelect: (value: string) => void
}) {
  return (
    <Menu>
      <MenuButton
        as={Button}
        variant='outline'
        size='sm'
        rightIcon={<HiSortAscending />}
        fontWeight='normal'
        color='var(--opacity-black)'
      >
        {selectedOption ? selectedOption : 'Sort by'}
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => onSelect('relevancy')}>Relevancy</MenuItem>
        <MenuItem onClick={() => onSelect('popularity')}>Popularity</MenuItem>
        <MenuItem onClick={() => onSelect('publishedAt')}>Newest</MenuItem>
      </MenuList>
    </Menu>
  )
}
