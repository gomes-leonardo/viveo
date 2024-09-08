'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

import Form from '@/components/Form'
import { useForm } from '@/hooks/useForm'

import { Snackbar, Alert } from '@mui/material'

const Register = () => {
  const { values, errors, handleChange, validate } = useForm({
    email: '',
    password: '',
    confirmPassword: '',
  })

  const [confirmPasswordError, setConfirmPasswordError] = useState<
    string | null
  >(null)
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    document.title = 'Viveo • Cada'
  }, [])

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { name, value } = e.target
    handleChange(e)

    if (name === 'confirmPassword' && value !== values.password) {
      setConfirmPasswordError('As senhas não coincidem')
    } else {
      setConfirmPasswordError(null)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (values.password !== values.confirmPassword) {
      setConfirmPasswordError('As senhas não coincidem')
    } else {
      setConfirmPasswordError(null)

      if (validate()) {
        setLoading(true)
        setOpen(true)

        setTimeout(() => {
          setLoading(false)
          router.push('/login')
        }, 3000)
      } else {
        console.log('Formulário inválido')
      }
    }
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 p-4 md:p-8">
      <div className="bg-white rounded-lg shadow-lg flex flex-col  max-w-2xl px-6 py-10">
        <div className="w-350px flex flex-col items-center justify-center">
          <div className="absolute top-6 sm:top-4 left-6 sm:left-4 text-lg sm:text-xl font-semibold text-teal-600"></div>
          <h2 className="text-2xl font-bold text-secondary-default text-center mb-4">
            Cadastre sua conta
          </h2>
          <Form
            fields={[
              {
                label: 'Email',
                type: 'email',
                placeholder: 'Digite seu email',
                name: 'email',
                value: values.email,
                onChange: handleChange,
                error: errors.email,
              },
              {
                label: 'Senha',
                type: 'password',
                placeholder: 'Digite sua senha',
                name: 'password',
                value: values.password,
                onChange: handleChange,
                error: errors.password,
              },
              {
                label: 'Confirmar senha',
                type: 'password',
                placeholder: 'Confirme sua senha',
                name: 'confirmPassword',
                value: values.confirmPassword,
                onChange: handleConfirmPasswordChange,
                error: confirmPasswordError,
              },
            ]}
            submitButtonText="Cadastrar-se"
            onSubmit={handleSubmit}
            redirectUrlOnSubmit="/login"
            loading={loading}
          />

          <p
            onClick={() => router.push('/login')}
            className="mt-6 text-teal-600 cursor-pointer "
          >
            Já possui uma conta?{' '}
            <span className="font-bold text-secondary-default hover:underline ">
              Entrar
            </span>
          </p>
        </div>
      </div>

      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Conta criada com sucesso! Redirecionando para o login...
        </Alert>
      </Snackbar>
    </div>
  )
}

export default Register
