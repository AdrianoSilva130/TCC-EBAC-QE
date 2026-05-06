Funcionalidade: Login

Cenário: Login válido
Dado que acesso página login
Quando informo usuário válido
E senha válida
Então acesso painel

Cenário: Login inválido
Dado que acesso login
Quando informo senha incorreta
Então sistema exibe erro

Cenário: Bloqueio após 3 tentativas
Dado que erro senha 3 vezes
Quando tento logar novamente
Então conta deve ser bloqueada por 15 minutos

Cenário: Usuário inativo
Dado usuário inativo
Quando tenta login
Então sistema impede acesso