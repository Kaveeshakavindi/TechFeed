'use client'
import React, { useState } from 'react'
import { signUpInputs, socials } from '@/data'
import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement
} from '@chakra-ui/react'
import { signUpFormProps } from '@/types/types'
import { useRouter } from 'next/navigation'
const Signup = () => {
  const router = useRouter()
  const [eyeCheck, setEyeCheck] = useState(false)
  const [form, setForm] = useState<signUpFormProps>({
    name: '',
    email: '',
    password: ''
  })
  return (
    <div className='w-[100vw] bg-white h-[100vh] flex flex-col fixed left-0 z-1000 items-center justify-center '>
      <div className='font-bold py-4'>Sign Up</div>
      <form className='lg:w-[30%] w-[50%]'>
        {signUpInputs.map((input, idx) => (
          <div key={idx}>
            <InputGroup mb='3'>
              <InputLeftElement color='gray' py='6'>
                <div className='flex '>
                  {input.icons.slice(0, 1).map((icon, iconIdx) => (
                    <div key={iconIdx}>{icon}</div>
                  ))}
                </div>
              </InputLeftElement>
              <InputRightElement h='100%' color='gray'>
                <div className='h-full flex items-center justify-center'>
                  {eyeCheck === false &&
                    input.icons.slice(2, 3).map((icon, iconIdx) => (
                      <div
                        className=''
                        key={iconIdx}
                        onClick={() => {
                          setEyeCheck(true)
                        }}
                      >
                        {icon}
                      </div>
                    ))}
                  {eyeCheck === true &&
                    input.icons.slice(1, 2).map((icon, iconIdx) => (
                      <div
                        className=''
                        key={iconIdx}
                        onClick={() => {
                          setEyeCheck(false)
                        }}
                      >
                        {icon}
                      </div>
                    ))}
                </div>
              </InputRightElement>
              <Input
                borderRadius='10'
                value={form[input.name]}
                placeholder={input.placeholder}
                colorScheme='gray'
                size='sm'
                py='6'
                pl='10'
                type={
                  input.name === 'password'
                    ? eyeCheck === false
                      ? 'password'
                      : 'text'
                    : 'text'
                }
                onChange={e => {
                  const updatedForm = {
                    ...form,
                    [input.name]: e.target.value
                  }
                  console.log('form values: ', form.email, form.password)
                  setForm(updatedForm)
                }}
              />
            </InputGroup>
          </div>
        ))}
        <div className='text-right text-sm text-neutral-600 underline'>
          Forgot Password?
        </div>
        <Button className='w-full' marginY='4' bg='black' colorScheme='green'>
          Sign Up
        </Button>
      </form>

      <div className='text-sm text-neutral-500'>Or sign up with</div>
      <div className='my-4 flex flex-row justify-between gap-2 w-[10%] text-lg items-center justify-center'>
        {socials.map((social, index) => (
          <div
            className='text-xl px-4 py-2 bg-neutral-100 rounded-sm'
            key={index}
          >
            {social.icon}
          </div>
        ))}
      </div>
      <div className='text-sm text-neutral-500'>
        {`Have an account?`}{' '}
        <span
          className='text-green-600 cursor-pointer'
          onClick={() => router.push('/login')}
        >
          Log In
        </span>
      </div>
    </div>
  )
}

export default Signup
