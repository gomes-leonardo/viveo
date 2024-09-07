import Form from '@/components/Form'

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 p-4 md:p-8">
      <div className="bg-white rounded-2xl shadow-lg flex flex-col md:flex-row  max-w-3xl">
        <div className="relative w-full  p-8 flex flex-col items-center justify-center min-h-[500px]">
          {' '}
          <div className="absolute top-4 left-4">
            <h1 className="text-md">
              <span className="text-secondary-default">Vi</span>
              <span className="text-primary-default">veo</span>
            </h1>
          </div>
          <div className="pt-16 w-full flex flex-col items-center">
            {' '}
            <h2 className="text-3xl font-bold text-primary-default text-center">
              Cadastre sua conta
            </h2>
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
                {
                  label: 'Confirmar senha',
                  type: 'password',
                  placeholder: 'Confirmar senha',
                },
              ]}
              submitButtonText="Cadastrar-se"
              showForgotPassword={true}
              title="Ja possui uma conta?"
              redirectUrl="/login"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
