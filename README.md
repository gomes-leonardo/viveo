Painel de Prontuário - Viveo
Este projeto é um painel de prontuário desenvolvido para a Viveo, com autenticação de login e gerenciamento de dados fictícios de pacientes. O objetivo desta aplicação é fornecer uma interface simples e funcional para visualização de informações de pacientes, como vacinas, medicações e consultas, integrando dados reais e fictícios.

Funcionalidades
1. Login e Autenticação:
O painel conta com uma tela de login, onde o usuário insere seu email e senha para acessar o sistema.
Há um hook customizado que valida os campos do formulário, garantindo que:
O email seja válido.
A senha atenda aos requisitos.
A confirmação de senha coincida.
O formulário possui uma opção de "Lembrar Senha", que salva o estado de autenticação no localStorage. Quando o usuário acessa a aplicação posteriormente, ele é redirecionado automaticamente para o perfil.
2. Redirecionamento Inteligente:
Assim que o usuário faz login, ele é redirecionado para a página de perfil, onde pode visualizar os dados dos pacientes.
Caso o usuário marque a opção "Lembrar Senha", sua sessão é mantida e, ao acessar a rota /, ele é redirecionado automaticamente para o painel de perfil.
3. Tela de Perfil do Paciente:
A tela de perfil exibe os dados dos pacientes, utilizando a API do RandomUser.
Além dos dados reais (nome, email, localização, telefone), a aplicação também gera dados fictícios como:
Vacinas (status de vacinação completo/incompleto para várias vacinas),
Data da última consulta,
Medicação atual.
Estes dados fictícios são gerados dinamicamente com Math.random para simular um prontuário completo.
4. Segurança da Rota /paciente:
A rota /paciente é protegida e só pode ser acessada por usuários logados.
A verificação do estado de login é feita usando tanto sessionStorage quanto localStorage. Se o usuário estiver logado com a opção "Lembrar Senha", o estado é mantido no localStorage e a sessão é persistida. Caso contrário, o estado é mantido no sessionStorage, que é encerrado ao fechar o navegador.
Usuários não autenticados são redirecionados para a página de login se tentarem acessar diretamente a rota /paciente.
Tecnologias Utilizadas
Next.js: Framework utilizado para desenvolver a aplicação com foco em performance e experiência do usuário.
React.js: Biblioteca para criação de interfaces dinâmicas e componentes reutilizáveis.
Material-UI (MUI): Biblioteca de componentes UI para estilização e responsividade.
Hooks Customizados: Implementação de hooks para validação de formulários e manipulação do estado da aplicação.
RandomUser API: API externa para geração de dados fictícios de pacientes.
Como Rodar a Aplicação
Siga os passos abaixo para rodar a aplicação localmente:

Clone o repositório:

bash
Copiar código
git clone https://github.com/seu-usuario/painel-prontuario-viveo.git
Acesse o diretório do projeto:

bash
Copiar código
cd painel-prontuario-viveo
Instale as dependências:

bash
Copiar código
npm install
Inicie o servidor de desenvolvimento:

bash
Copiar código
npm run dev
Acesse a aplicação no navegador:

Abra o navegador e vá até http://localhost:3000.