# Sistema de Cadastro de Despesas Simples

## Quer testar o sistema antes do clone
https://app-orcamento-pessoal.web.app

Este é um projeto simples para cadastro de despesas que utiliza cookies do navegador como banco de dados. O objetivo principal é demonstrar as possibilidades de construção de um sistema utilizando **JavaScript puro** (sem frameworks ou bibliotecas externas), focando na simplicidade e na demonstração de conceitos básicos.

## Funcionalidades

- **Cadastro de Despesas**: Permite ao usuário cadastrar uma nova despesa informando uma descrição, valor e data.
- **Consulta de Despesas**: Exibe todas as despesas cadastradas, com a opção de filtrar por data ou descrição.
- **Persistência Local com Cookies**: Os dados das despesas são armazenados nos cookies do navegador, o que permite que cada usuário veja apenas suas próprias despesas sem necessidade de login.

## Diferenciais

- **JavaScript Puro**: Todo o sistema foi desenvolvido utilizando apenas JavaScript puro, sem a dependência de frameworks ou bibliotecas externas, o que torna o código mais acessível e fácil de entender.
- **Uso de Cookies como Banco de Dados**: Ao invés de utilizar um banco de dados convencional, este projeto armazena as informações localmente através de cookies, simplificando a implementação e facilitando a demonstração.
- **Sem Necessidade de Login**: Como as despesas são armazenadas localmente, não há necessidade de criar contas ou realizar login. Cada usuário pode acessar o sistema a partir do mesmo link e visualizar ou cadastrar suas próprias despesas.

## Tecnologias Utilizadas

- **HTML/CSS**: Estrutura e estilização do frontend.
- **JavaScript Puro**: Lógica de cadastro, consulta e manipulação de cookies.
- **Cookies**: Armazenamento local das despesas.

## Melhorias Potenciais

Este projeto é uma amostra simples com muitas possibilidades de aprimoramento, incluindo:

- **Frontend**:
  - Adicionar uma interface mais sofisticada e amigável.
  - Incluir gráficos ou visualizações para as despesas.
  - Melhorar a responsividade para dispositivos móveis.

- **Backend**:
  - Migrar o armazenamento dos cookies para um banco de dados real.
  - Implementar autenticação de usuários para que as despesas sejam acessíveis de qualquer dispositivo.
  - Integrar APIs externas para funcionalidades adicionais, como conversão de moedas ou categorização automática de despesas.

## Como Executar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git

2. Abra o arquivo index.html no navegador:
    O sistema é totalmente baseado em frontend, sem necessidade de servidor ou backend.
    Todas as funcionalidades estarão disponíveis assim que o arquivo for aberto.

## Licença
Este projeto é licenciado sob a MIT License.

## Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

Este `README.md` destaca que o sistema foi desenvolvido exclusivamente com JavaScript puro, sem o uso de frameworks, o que é um ponto importante para quem deseja entender ou aprender a construir sistemas simples e diretos.