import React from 'react'
import { loginInputs } from '@/data'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
const Login = () => {
  return (
    <div className='w-[100vw] bg-white h-[100vh] flex flex-col fixed left-0 z-1000 items-center justify-center '>
      <div className='font-bold'>Sign In With Email</div>
      <form>
        {loginInputs.map((input, index) => (
          <div key={index}>
            <InputGroup mb='3'>
              <InputLeftElement color='gray' py='6'>
                <div className='flex flex-row justify-between '>
                  <div>{input.icons[0]}</div>
                  {input.placeholder === 'Password' ? (
                    <div>{input.icons[1]}</div>
                  ) : (
                    ''
                  )}
                </div>
              </InputLeftElement>
              <Input
                borderRadius='10'
                //   value={}
                placeholder={input.placeholder}
                colorScheme='gray'
                size='sm'
                py='6'
                pl='10'
                //   onChange={e => setSearchQuery(e.target.value)}
              />
            </InputGroup>
          </div>
        ))}

        <div>
          {/* map through socials */}
          <div>{/* icon */}</div>
        </div>
      </form>
      <div>Forgot Password?</div>
      <div>Or login in with</div>
    </div>
  )
}

export default Login
