import { useForm } from 'react-hook-form'
import { LoginData } from '@/features/auth/types'
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input
} from '@chakra-ui/react'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import { login } from '../api/login'
import { register as registerUser } from '../api/register'

export const LoginForm = () => {
  const {
    handleSubmit,
    register,
    setError,
    formState: { errors, isSubmitting }
  } = useForm<LoginData>()

  const navigate = useNavigate()

  const onSubmit = async (value: LoginData) => {
    login(value)
      .catch(() => registerUser(value))
      .finally(() => {
        if (Cookies.get('session')) {
          navigate('/')
        } else {
          setError('password', {
            message: 'password is wrong'
          })
        }
      })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.name}>
        <FormLabel htmlFor="name">name</FormLabel>
        <Input
          id="name"
          {...register('name', { required: 'This is required' })}
        />
        <FormErrorMessage id="name">
          {errors.name && errors.name.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={!!errors.password}>
        <FormLabel htmlFor="password">password</FormLabel>
        <Input
          id="password"
          type="password"
          {...register('password', { required: 'This is required' })}
        />
        <FormErrorMessage id="password">
          {errors.password && errors.password.message}
        </FormErrorMessage>
      </FormControl>
      <Button
        isLoading={isSubmitting}
        type="submit"
        mt={4}
        bg={'#077915'}
        color="white"
      >
        Submit
      </Button>
    </form>
  )
}
