
# Controle de estoque

Um projeto com o objetivo de criar um sistema de gerenciamento de estoque básico.

O projeto simula um sistema para uma empresa que tem estoques de alimentos, e os fornece para mercados ou lojas de conveniência.




## Documentação

O projeto conta com as entidades:

Usuario

Pedidos

Produto

Cliente

Fornecedores

<br>

Onde: 

  - O usuário pode ser ADM ou comum, se for ADM:

  - - Tem acesso a uma página de relatórios e análises.
  - - Pode ver os usuários ativos no sistema, ativar ou desativar usuários.

  - Já o usuário comum pode acessar as páginas para interagir com o sistema, podendo:
  - - Gerenciar pedidos de clientes
  - - Verificar produtos faltantes no estoque e pedir aos fornecedores
  - - Verificar clientes atuais

  - Um cliente pode fazer o pedido de diversos produtos

  - Se um produto estiver faltando, é possível fazer um pedido ao fornecedor para completar o estoque do produto faltante (é feita uma simulação nesse projeto, pois na vida real teria um delay).



## Stack utilizada

**Front-end:** Angular, CSS

**Back-end:** Node, NestJS

**Bancos de dados:** MySQL


## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/OctavioMagnani/Projeto-de-estoque---UNIFAVIP.git
```

Entre no diretório do projeto (deposito)
 - SCE -> Front-End
 - deposit_manager -> Back-End

```bash
  cd SCE
  cd deposit_manager
```

Instale as dependências em cada diretório

```bash
  npm install
```

Inicie os servidores

```bash
  Back-End: nest start
  Front-End: ng serve --open
  MySQL: Verifique se o serviço do MySQL está rodando
```

## Autor

- [@Octavio](hhttps://github.com/OctavioMagnani)


