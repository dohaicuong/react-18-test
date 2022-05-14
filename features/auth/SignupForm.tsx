import { Box, Button, Link, Stack, TextField, Typography, useTheme } from '@mui/material'
import logo from '../../assets/go1_logo.svg'

import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'
import { FormTextField } from '../../components/FormTextField'
import { FormPasswordField } from '../../components/FormPasswordField'

type SignupInput = {
  first_name: string
  last_name: string
  email: string
  password: string
} 

export const SignupForm = () => {
  const theme = useTheme()

  const methods = useForm<SignupInput>()
  const onSubmit: SubmitHandler<SignupInput> = data => console.log(data)

  console.log(methods.formState.errors)

  return (
    <FormProvider {...methods}>
      <Box
        sx={{ width: '60%' }}
        component='form'
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <Stack
          direction='column'
          justifyContent='center'
          alignItems='center'
          spacing={1}
        >
          <img src={logo.src} style={{ marginBottom: 30 }} />
          <Typography sx={{ fontWeight: 500, fontSize: 20, color: theme.palette.secondary.main }}>
            Sign up with your work email!
          </Typography>
          <Typography sx={{ fontWeight: 500, fontSize: 16 }}>
            Already have an account? <Link href='#'>Log in</Link>
          </Typography>
          <Stack direction='column' paddingTop={3} paddingX={2} spacing={2}>
            <Stack direction='row' spacing={1}>
              <FormTextField
                label='First Name'
                fullWidth
                {...methods.register('first_name', { required: 'First name is required' })}
              />
              <FormTextField
                label='Last Name'
                fullWidth
                {...methods.register('last_name', { required: 'Last name is required'})}
              />
            </Stack>

            <FormTextField
              label='Email'
              {...methods.register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address'
                },
              })}
            />

            <FormPasswordField
              label='Password'
              {...methods.register('password', { required: 'Password is required' })}
            />

            <Button variant='contained' size='large' type='submit'>
              Create new account
            </Button>

            <Typography textAlign='center'>
              By creating an account you agree to Data feed test v2's
              {' '}
              <Link href='#'>Terms of Use</Link>
              {' '}
              and
              {' '}
              <Link href='#'>Privacy Policy</Link>
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </FormProvider>
  )
}
