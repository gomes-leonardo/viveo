/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'

export const useForm = (initialState: any) => {
  const [values, setValues] = useState(initialState)
  const [errors, setErrors] = useState<any>({})

  const validateField = (name: string, value: string) => {
    let error = ''

    if (name === 'email') {
      if (!/\S+@\S+\.\S+/.test(value)) {
        error = 'Email inválido'
      }
    }

    if (name === 'password') {
      if (value.length < 6) {
        error = 'A senha deve ter no mínimo 6 caracteres'
      }
    }

    setErrors((prevErrors: any) => ({
      ...prevErrors,
      [name]: error || undefined,
    }))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setValues({
      ...values,
      [name]: value,
    })

    validateField(name, value)
  }

  const validate = () => {
    const validationErrors: any = {}

    if (!/\S+@\S+\.\S+/.test(values.email)) {
      validationErrors.email = 'Email deve ser um e-mail válido'
    }

    if (values.password.length < 6) {
      validationErrors.password = 'A senha deve ter no mínimo 6 caracteres'
    }

    setErrors(validationErrors)

    return Object.keys(validationErrors).length === 0
  }

  return { values, errors, handleChange, validate }
}
