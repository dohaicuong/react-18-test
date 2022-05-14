import { TextField, TextFieldProps } from '@mui/material'
import { useFormContext, useFormState } from 'react-hook-form'

type OmitProps = 'name' | 'error' | 'helperText'

export type FormTextFieldProps = Omit<TextFieldProps, OmitProps> & {
  name: string
}

export const FormTextField: React.FC<FormTextFieldProps> = (props) => {
  const { register, formState: { errors } } = useFormContext()
  const error = errors[props.name]

  return (
    <TextField
      {...props}
      {...register(props.name)}
      error={Boolean(error)}
      helperText={error?.message}
    />
  )
}
