'use client'

import CustomButton from '@/components/Button'
import Form from '@/components/Form'
import { useForm } from '@/hooks/useForm'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const Login = () => {
  const [loading, setLoading] = useState(false)
  const { values, errors, handleChange, validate } = useForm({
    email: '',
    password: '',
  })
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validate()) {
      setLoading(true)

      setTimeout(() => {
        setLoading(false)
        router.push('/profile')
      }, 2000)
      
    } else {
      console.log('Formulário inválido')
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4 sm:p-8">
      <div className="bg-white rounded-2xl shadow-2xl flex flex-col sm:flex-row w-full max-w-4xl">
        <div className="relative w-full sm:w-7/12 p-4 sm:p-10 flex flex-col items-center justify-center min-h-[400px] sm:min-h-[500px] bg-white">
          <div className="absolute top-4 sm:top-1 left-4 text-lg sm:text-xl font-semibold text-teal-600">
            <span className="text-teal-500">Vi</span>
            <span className="text-secondary-default">veo</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-green-500 text-center mt-6 sm:mt-10">
            Bem vindo de volta!
          </h2>
          <p className="text-base sm:text-lg text-gray-500 mt-2 text-center">
            Entre em sua conta
          </p>
          <Form
            fields={[
              {
                label: 'Email',
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
            ]}
            showForgotPassword={true}
            submitButtonText="Iniciar sessão"
            redirectUrl="/login"
            onSubmit={handleSubmit}
              loading={loading}
          />
        </div>

        <div className="w-full sm:w-5/12 bg-gradient-to-r from-teal-500 to-green-500 text-white p-4 sm:p-10 flex flex-col items-center justify-start sm:justify-center min-h-[250px] sm:min-h-[500px] rounded-b-2xl sm:rounded-r-2xl sm:rounded-bl-none">
          <div className="text-center mt-2 sm:mt-0">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white bg-clip-text bg-gradient-to-r from-white to-gray-200">
              Não tem cadastro?
            </h2>
            <p className="mt-4 text-white text-base sm:text-sm">
              Preencha suas informações pessoais e comece sua jornada conosco.
            </p>
            <CustomButton
              redirectUrl="/register"
              title="Registrar-se"
              className="mt-4 py-2 sm:py-3 px-4 sm:px-6 bg-white text-teal-600 rounded-lg shadow-lg transition-all duration-500 ease-in-out hover:bg-teal-700 hover:text-white"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
