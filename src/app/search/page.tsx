'use client'
import NewsCard from '@/components/ui/newsCard'
import { useGetSearchArticlesQuery } from '@/services/dataService'
import {
  Box,
  Text,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Spinner,
  SimpleGrid
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { GoSearch } from 'react-icons/go'

export default function Search () {
  const [searchQuery, setSearchQuery] = useState('')
  const {
    data: searchData,
    isLoading: searchLoading,
    error: searchError
  } = useGetSearchArticlesQuery(searchQuery)
  return (
    <Box
      p='6'
      display='flex'
      flexDirection='column'
      height='90vh'
      justifyContent='left'
      alignItems='center'
      mt='15%'
      width={`calc(100vw - 350px)`}
    >
      {!searchQuery && (
        <Box>
          <div
            style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              color: 'var(--secondary)'
            }}
          >
            Find The <span style={{ color: 'var(--primary)' }}>Article</span>
          </div>
        </Box>
      )}
      <InputGroup mb='10' width='60%'>
        <InputLeftElement
          pointerEvents='none'
          display='flex'
          alignItems='center'
          color='gray'
          py='6'
        >
          <GoSearch color='gray.500' />
        </InputLeftElement>
        <Input
          borderRadius='10'
          flex='1'
          value={searchQuery}
          placeholder='Search articles'
          colorScheme='gray'
          size='sm'
          py='6'
          onChange={e => setSearchQuery(e.target.value)}
        />
      </InputGroup>

      <Heading mb='6' textAlign='left' width='100%'>
        {searchQuery ? 'Search Results' : ''}
      </Heading>
      {searchQuery && searchData ? (
        <Box mt='3rem' mb='6'>
          {searchLoading ? (
            <Spinner size='lg' />
          ) : searchError ? (
            <Text color='red'>Error occured</Text>
          ) : (
            <SimpleGrid mb={5} columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
              {searchData?.map((article, index) => (
                <NewsCard key={index} article={article} />
              ))}
            </SimpleGrid>
          )}
        </Box>
      ) : (
        ''
      )}
    </Box>
  )
}
