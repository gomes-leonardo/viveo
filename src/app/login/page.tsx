import CustomButton from '@/components/Button'
import Form from '@/components/Form'

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 p-4 md:p-8">
      <div className="bg-white rounded-2xl shadow-lg flex flex-col md:flex-row w-full max-w-4xl">
        <div className="relative w-full md:w-8/12 p-8 flex flex-col items-center justify-center min-h-[500px]">
          {' '}
          <div className="absolute top-4 left-4">
            <h1 className="text-md">
              <span className="text-secondary-default">Vi</span>
              <span className="text-primary-default">veo</span>
            </h1>
          </div>
          <div className="pt-16 w-full flex flex-col items-center">
            {' '}
            <h2 className="text-3xl font-bold text-secondary-default text-center">
              Bem vindo de volta!
            </h2>
            <p className="mt-2 text-gray-600 text-center">Entre em sua conta</p>
            <Form
              fields={[
                {
                  label: 'Email',
                  type: 'email',
                  placeholder: 'Enter your email',
                },
                {
                  label: 'Senha',
                  type: 'password',
                  placeholder: 'Enter your password',
                },
              ]}
              showForgotPassword={true}
              submitButtonText="Iniciar sessão"
              redirectUrl="/register"
            />
          </div>
        </div>

        <div className="w-full md:w-5/12 bg-primary-default text-white rounded-t-1xl md:rounded-r-2xl p-8 flex flex-col items-center justify-center min-h-[500px]">
          {' '}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-secondary-default">
              Não tem cadastro?
            </h2>
            <p className="mt-4 text-secondary-default">
              Preencha suas informações pessoais e comece sua jornada conosco.
            </p>
            <CustomButton
              redirectUrl="/register"
              title="Registrar-se"
              className="mt-4 p-3 "
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
