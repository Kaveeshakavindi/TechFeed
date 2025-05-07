'use client'
import { Box, Button, Tab, TabList, Tabs, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { BiChevronRightSquare } from 'react-icons/bi'
import { useRouter } from 'next/navigation'
export default function VerticleTabs () {
  const router = useRouter()
  const pages = ['home', 'search', 'bookmarks', 'profile', 'settings', 'logout']
  return (
    <Tabs
      orientation='vertical'
      variant='line'
      colorScheme='customWhite'
      bg='var(--primary)'
      height='100vh'
      position='fixed'
      zIndex='1000'
      justifyContent='center'
    >
      <TabList
        minW='250px'
        borderLeft='2px'
        display='flex'
        flexDirection='column'
        justifyContent='space-between'
      >
        <Box>
          <Box
            display='flex'
            flexDirection='row'
            alignItems='center'
            gap='0.8rem'
            width='100%'
            justifyContent='center'
            paddingY='2rem'
          >
            <BiChevronRightSquare color='var(--secondary)' size='1.5rem' />
            <Text fontFamily='heading' color='white' fontSize='1.2rem'>
              Next Gen
            </Text>
          </Box>
          {pages.slice(0, 4).map((page, index) => (
            <Tab
              key={index}
              as={Link}
              href={page === 'home' ? '/' : `/${page}`}
            >
              {page.charAt(0).toUpperCase() + page.slice(1)}
            </Tab>
          ))}
        </Box>
        <Box
          display='flex'
          justifyContent='center'
          width='100%'
          mt='2rem'
          mb='3rem'
        >
          <Button
            colorScheme='whiteAlpha'
            onClick={() => router.push('/login')}
          >
            Sign In
          </Button>
        </Box>
      </TabList>
    </Tabs>
  )
}
