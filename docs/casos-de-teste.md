# Casos de Teste

---

# US-0001 Adicionar item ao carrinho

## CT001 - Adicionar produto com sucesso
**Pré-condição:** usuário acessando página de produto

**Passos:**
1. Selecionar cor
2. Selecionar tamanho
3. Informar quantidade 1
4. Clicar em adicionar ao carrinho

**Resultado esperado:**
Produto adicionado com sucesso ao carrinho.

**Técnica:** Partição de equivalência  
**Automatizado:** Sim

---

## CT002 - Validar limite máximo de itens
**Pré-condição:** usuário acessando página de produto

**Passos:**
1. Selecionar produto
2. Informar quantidade 11
3. Clicar adicionar

**Resultado esperado:**
Sistema deve bloquear inclusão acima de 10 itens.

**Técnica:** Valor limite  
**Automatizado:** Sim

---

## CT003 - Aplicar cupom 10%
**Pré-condição:** carrinho vazio

**Passos:**
1. Adicionar produtos totalizando R$300
2. Finalizar inclusão

**Resultado esperado:**
Cupom de 10% aplicado automaticamente.

**Técnica:** Tabela de decisão  
**Automatizado:** Não

---

## CT004 - Aplicar cupom 15%
**Pré-condição:** carrinho vazio

**Passos:**
1. Adicionar produtos totalizando R$700

**Resultado esperado:**
Cupom de 15% aplicado automaticamente.

**Técnica:** Tabela de decisão  
**Automatizado:** Não

---

# US-0002 Login na plataforma

## CT005 - Login válido
**Pré-condição:** usuário ativo cadastrado

**Passos:**
1. Acessar login
2. Informar usuário válido
3. Informar senha válida
4. Clicar entrar

**Resultado esperado:**
Usuário autenticado com sucesso.

**Técnica:** Partição de equivalência  
**Automatizado:** Sim

---

## CT006 - Login inválido
**Pré-condição:** usuário cadastrado

**Passos:**
1. Inserir senha incorreta
2. Clicar entrar

**Resultado esperado:**
Mensagem de erro exibida.

**Técnica:** Partição de equivalência  
**Automatizado:** Sim

---

## CT007 - Bloqueio após 3 tentativas
**Pré-condição:** usuário cadastrado

**Passos:**
1. Errar senha 3 vezes consecutivas

**Resultado esperado:**
Conta bloqueada por 15 minutos.

**Técnica:** Transição de estado  
**Automatizado:** Não

---

## CT008 - Usuário inativo
**Pré-condição:** usuário inativo

**Passos:**
1. Inserir credenciais válidas de usuário inativo

**Resultado esperado:**
Sistema impede login.

**Técnica:** Partição de equivalência  
**Automatizado:** Não

---

# US-0003 API Cupons

## CT009 - Listar cupons
**Pré-condição:** autenticação válida

**Passos:**
1. Executar GET /coupons

**Resultado esperado:**
Status 200 e lista de cupons.

**Técnica:** API Functional  
**Automatizado:** Sim

---

## CT010 - Criar cupom válido
**Pré-condição:** autenticação válida

**Passos:**
1. Executar POST com body válido

**Resultado esperado:**
Cupom criado com sucesso.

**Técnica:** Partição de equivalência  
**Automatizado:** Sim

---

## CT011 - Cupom duplicado
**Pré-condição:** cupom existente

**Passos:**
1. Criar cupom com nome repetido

**Resultado esperado:**
Sistema retorna erro.

**Técnica:** Partição de equivalência  
**Automatizado:** Sim

---

## CT012 - Body inválido
**Pré-condição:** autenticação válida

**Passos:**
1. Executar POST sem campos obrigatórios

**Resultado esperado:**
Erro de validação.

**Técnica:** Valor limite  
**Automatizado:** Sim