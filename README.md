# 🛒 Brivio - Loja Virtual

O **Brivio** é um sistema de e-commerce focado em eletrônicos que simula o fluxo completo de um carrinho de compras e checkout de pagamento com validação de dados em tempo real.


## 🎯 Objetivo do Projeto

O sistema foi criado com o objetivo de colocar em prática os conhecimentos adquiridos durante o módulo do curso, simulando uma experiência autêntica de compra e checkout em uma loja virtual, cobrindo validação de formulários, estados dinâmicos, rotas e regras de prevenção a fraudes no navegador.


## 📌 Funcionalidades e Fluxo da Aplicação

1. **Resumo do Carrinho:** Exibição dos itens selecionados, calculando o subtotal de cada produto e o valor total final em Reais (R$).

2. **Formulário de Pagamento:** Cadastro e validação em tempo real dos dados do cartão de crédito (titular, número do cartão, validade e CVV).

3. **Detecção de Fraude (Simulação de Golpe):** Algoritmo que identifica se todos os 16 dígitos do cartão inserido são idênticos (ex: `1111111111111111`). Caso detectado, a aplicação redireciona para a tela de falha exibindo a mensagem `"tentativa de golpe"`.

4. **Confirmação de Compra:** Transações com dados válidos e cartões autênticos exibem a tela de compra aprovada com sucesso.


## 🛠️ Tecnologias e Ferramentas

- **React & Vite** 
- **React Router Dom** 
- **React Hook Form & Zod** 
- **CSS Puro** 
- **Ferramentas:** VSCode, Git, GitHub, Trello, PDFs ChatGPT e Gemini, DevTools

## 📂 Estrutura do Projeto

loja-virtual/
├── public/              # Arquivos estáticos (logo.png)- Logo da guia da página
├── src/
│   ├── assets/          # Recursos visuais (logo.png)
│   ├── components/      # Componentes reutilizáveis (ItemCarrinho.jsx, ResumoCompra.jsx)
│   ├── data/            # Dados fictícios dos produtos (produtos.js)
│   ├── hooks/           # Custom hook (usePagamento.js)
│   ├── pages/           # Páginas (Carrinho.jsx, Pagamento.jsx, Sucesso.jsx, Falha.jsx)
│   ├── utils/           # Funções utilitárias e regras de negócio
│   ├── App.css          # Estilos do componente principal
│   ├── App.jsx          # Configuração de rotas da aplicação
│   ├── index.css        # Estilos da Loja Virtual
│   └── main.jsx         # Ponto de entrada do React
├── index.html           # HTML
└── package.json         # Dependências do projeto


Link do Repositório (GitHub): https://github.com/lucasdermandes-hub/loja-virtual

Link do Vídeo: https://drive.google.com/file/d/1zfKOVt7pcwxvo3P2Imro8qnr6_RJLUsK/view?usp=sharing


Link do Trello: https://trello.com/invite/b/6aa846036cc7b50f2e11ccb1/ATTI9bbeff30b4e6fb3acd24a9b6ad0d535816329A88/loja-virtual
