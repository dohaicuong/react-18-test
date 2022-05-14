import { useState } from 'react'
import { InputAdornment, IconButton } from '@mui/material'
import { FormTextField, FormTextFieldProps } from './FormTextField'
import { Visibility, VisibilityOff } from '@mui/icons-material'

type FormPasswordFieldProps = Omit<FormTextFieldProps, 'type'>

export const FormPasswordField: React.FC<FormPasswordFieldProps> = props => {
  const [isShow, setIsShow] = useState(false)

  return (
    <FormTextField
      {...props}
      type={isShow ? 'text' : 'password'}
      InputProps={{
        ...props.InputProps,
        endAdornment: (
          <InputAdornment position='end'>
            <IconButton onClick={() => setIsShow(pre => !pre)}>
              {isShow ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        )
      }}
    />
  )
}
