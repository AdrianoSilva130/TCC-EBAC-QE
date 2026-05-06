# TCC-EBAC-QE

Projeto de conclusão do curso **Profissão: Engenheiro de Qualidade de Software** da EBAC.

## Sobre o projeto

Este repositório contém a estratégia de testes e automações desenvolvidas para validação do e-commerce **EBAC Shop**, contemplando testes WEB, API e Mobile.

O objetivo é simular o fluxo completo de trabalho de um **Quality Engineer**, desde o planejamento de testes até a implementação de automações e evidências de execução.

---

## Estrutura do projeto

```bash
TCC-EBAC-QE/
├── UI/                 # Automação WEB com Cypress
├── API/                # Automação API com Supertest + Jest
├── Mobile/             # Automação Mobile Android com Appium + WebdriverIO
├── docs/               # Documentação do projeto
│   ├── estrategia-teste.md
│   ├── criterios-aceitacao.feature
│   ├── casos-de-teste.md
│   └── mapa-mental.png
└── README.md
```

---

## Tecnologias utilizadas

### WEB
- Cypress
- JavaScript
- Page Object Model (POM)

### API
- Supertest
- Jest
- JSON Schema Validation

### Mobile
- Appium
- WebdriverIO
- Android Emulator
- Page Object Model (POM)

---

## Funcionalidades testadas

### UI
- Login válido
- Login inválido
- Adicionar produto ao carrinho

### API
- Listar cupons
- Criar cupom
- Validar cupom duplicado
- Validar campos obrigatórios
- Validação de contrato

### Mobile
- Exibir catálogo de produtos
- Abrir detalhes do primeiro produto

---

## Como executar o projeto

### Clonar repositório

```bash
git clone https://github.com/SEU-USUARIO/TCC-EBAC-QE.git
```

---

## Executar testes WEB

```bash
cd UI
npm install
npm test
```

---

## Executar testes API

```bash
cd API
npm install
npm test
```

---

## Executar testes Mobile

Pré-requisitos:
- Android Studio
- Emulator Android
- Java JDK
- Appium

Executar:

```bash
cd Mobile
npm install
npm run wdio
```

---

## Estratégia de testes

O projeto contempla:

- Testes manuais
- Testes automatizados
- Testes funcionais
- Testes de API
- Testes mobile
- Critérios de aceitação em Gherkin
- Casos de teste positivos, negativos e alternativos

---

## Autor

**Adriano Silva Andrade de Araujo**  
QA Engineer | Test Automation | Software Quality