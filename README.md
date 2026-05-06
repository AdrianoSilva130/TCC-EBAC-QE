# TCC-EBAC-QE

Projeto de conclusão do curso **Profissão: Engenheiro de Qualidade de Software** da EBAC.

## Sobre o projeto

Este repositório contém a estratégia de testes, documentação e automações desenvolvidas para validação do e-commerce **EBAC Shop**.

O projeto simula o fluxo completo de atuação de um **Quality Engineer**, contemplando planejamento, definição de estratégia, criação de critérios de aceitação, casos de teste, automação WEB, API, Mobile, testes de performance e integração contínua.

---

## Estrutura do projeto

```bash
TCC-EBAC-QE/
├── UI/                      # Automação WEB com Cypress
├── API/                     # Automação API com Supertest + Jest
├── Mobile/                  # Automação Mobile Android com Appium + WebdriverIO
├── Performance/             # Testes de performance com K6
├── docs/                    # Documentação do projeto
│   ├── estrategia-teste.md
│   ├── criterios-aceitacao.feature
│   ├── casos-de-teste.md
│   └── mapa-mental.png
│   └── resultado-k6.png
└── .github/workflows/       # Integração contínua
    └── ci.yml
```

---

## Tecnologias utilizadas

### UI Automation
- Cypress
- JavaScript
- Page Object Model (POM)

### API Automation
- Supertest
- Jest
- JSON Schema Validation

### Mobile Automation
- Appium
- WebdriverIO
- Android Emulator
- Page Object Model (POM)

### Performance Testing
- K6

### CI/CD
- GitHub Actions

---

## Funcionalidades testadas

### WEB
- Login com sucesso
- Login inválido
- Adicionar produto ao carrinho

### API
- Listar cupons
- Criar cupom
- Validar cupom duplicado
- Validar campos obrigatórios
- Validar contrato da API

### Mobile
- Exibir catálogo de produtos
- Abrir primeiro produto

### Performance
- Login de usuários simultâneos
- Acesso ao catálogo de produtos

Configuração:
- 20 usuários virtuais
- duração: 2 minutos
- ramp-up: 20 segundos

---

## Integração contínua

Pipeline automatizado com GitHub Actions para execução de:

- Testes UI
- Testes API
- Testes de Performance

Executados automaticamente em:
- push
- pull request

---

## Como executar

### UI

```bash
cd UI
npm install
npm test
```

### API

```bash
cd API
npm install
npm test
```

### Mobile

Pré-requisitos:
- Android Studio
- Android Emulator
- Appium

```bash
cd Mobile
npm install
npm run wdio
```

### Performance

Pré-requisito:
- K6 instalado

```bash
cd Performance
k6 run performance-test.js
```

---

## Estratégia aplicada

O projeto contempla:

- Testes funcionais
- Testes não funcionais
- Testes manuais
- Testes automatizados
- Testes WEB
- Testes API
- Testes Mobile
- Testes de performance
- CI/CD
- Critérios Gherkin
- Casos positivos, negativos e alternativos

---

## Autor

**Adriano Silva Andrade de Araujo**  
QA Engineer | Test Automation | Software Quality  

GitHub: https://github.com/AdrianoSilva130