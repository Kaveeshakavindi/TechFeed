import { MdEmail } from 'react-icons/md'
import { IoMdLock } from 'react-icons/io'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaApple } from 'react-icons/fa'
import { IoMdEye } from 'react-icons/io'
import { IoMdEyeOff } from 'react-icons/io'

export const loginInputs = [
  {
    icons: [<MdEmail />],
    placeholder: 'Email'
  },
  {
    icons: [<IoMdLock />, <IoMdEye />, <IoMdEyeOff />],
    placeholder: 'Password'
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
