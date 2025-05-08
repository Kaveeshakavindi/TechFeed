import { MdEmail } from 'react-icons/md'
import { IoMdLock } from 'react-icons/io'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaApple } from 'react-icons/fa'
import { IoMdEye } from 'react-icons/io'
import { IoMdEyeOff } from 'react-icons/io'
import { loginInputsProps, signUpInputsProps } from './types/types'
import { FaUser } from 'react-icons/fa'

export const loginInputs: loginInputsProps[] = [
  {
    icons: [<MdEmail />],
    placeholder: 'Email',
    name: 'email'
  },
  {
    icons: [<IoMdLock />, <IoMdEye />, <IoMdEyeOff />],
    placeholder: 'Password',
    name: 'password'
  }
]

export const signUpInputs: signUpInputsProps[] = [
  {
    icons: [<FaUser />],
    placeholder: 'Name',
    name: 'name'
  },
  {
    icons: [<MdEmail />],
    placeholder: 'Email',
    name: 'email'
  },
  {
    icons: [<IoMdLock />, <IoMdEye />, <IoMdEyeOff />],
    placeholder: 'Password',
    name: 'password'
  }
]

export const socials = [
  {
    name: 'Apple',
    icon: <FaFacebookSquare />
  },
  {
    name: 'Google',
    icon: <FcGoogle />
  },
  {
    name: 'Facebook',
    icon: <FaApple />
  }
]
