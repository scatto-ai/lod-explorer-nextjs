#   Explorador Interativo de LOD BIM 

Uma aplicação web interativa construída com Next.js, React e TypeScript para visualizar e entender os diferentes Níveis de Desenvolvimento (LOD - Level of Development/Definition) comumente utilizados em projetos de Modelagem da Informação da Construção (BIM).

**[Link para a Demo Ao Vivo]**([LINK_DA_SUA_APP_NA_VERCEL])

---


##  Visão Geral e Objetivo

No universo BIM, comunicar e garantir um entendimento comum sobre o nível de detalhe e informação esperado em cada fase do projeto é crucial. O conceito de LOD (Level of Development/Definition) aborda essa necessidade, mas suas definições podem ser abstratas.

Este projeto visa facilitar a compreensão dos LODs mais comuns (100 a 350) através de uma interface visual e interativa, onde o usuário pode:

*   Selecionar um nível de LOD específico.
*   Visualizar uma representação gráfica (imagem) associada a esse nível.
*   Ler uma descrição clara do que aquele LOD representa em termos de geometria e informação.

O objetivo principal foi criar um recurso educacional e de referência rápida, ao mesmo tempo demonstrando habilidades em desenvolvimento web moderno com foco em tecnologias relevantes para o setor AEC Tech.

---

##  Funcionalidades

*   **Seleção Interativa:** Botões para escolher facilmente entre LOD 100, 200, 300 e 350.
*   **Exibição Dinâmica:** Atualização instantânea da imagem e descrição correspondente ao LOD selecionado.
*   **Interface Limpa:** Design moderno e responsivo utilizando Shadcn/UI e Tailwind CSS.
*   **Otimização:** Uso do componente `<Image>` do Next.js para otimização de imagens.
*   **Tipagem Forte:** Código escrito em TypeScript para maior robustez e manutenibilidade.

---

##  Tecnologias Utilizadas

*   **Framework:** [Next.js](https://nextjs.org/) (v14+ com App Router)
*   **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
*   **Biblioteca UI:** [React](https://reactjs.org/)
*   **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
*   **Componentes UI:** [Shadcn/UI](https://ui.shadcn.com/)
*   **Deployment:** [Vercel](https://vercel.com/)

---

## 🚀 Como Executar Localmente

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/scatto-ai/lod-explorer-nextjs.git
    cd lod-explorer-nextjs
    ```
2.  **Instale as dependências:**
    ```bash
    npm install
    # ou
    yarn install
    # ou
    pnpm install
    ```
3.  **Execute o servidor de desenvolvimento:**
    ```bash
    npm run dev
    # ou
    yarn dev
    # ou
    pnpm dev
    ```
4.  Abra http://localhost:3000 no seu navegador para ver o resultado.

---

##  Relevância para o Setor AEC 

Este projeto, embora conceitual, demonstra:

*   **Compreensão de Conceitos BIM:** Familiaridade com um pilar fundamental da metodologia BIM (LOD).
*   **Habilidade Técnica Aplicada:** Capacidade de traduzir um conceito do setor AEC em uma ferramenta web funcional e interativa, utilizando tecnologias modernas (React, Next.js, TypeScript).
*   **Foco na Experiência do Usuário:** Criação de uma interface clara e intuitiva para facilitar o entendimento de informações técnicas.
*   **Potencial de Aplicação:** Ferramentas como esta podem ser úteis para treinamento de equipes, comunicação com stakeholders, ou como base para visualizadores BIM mais complexos.

---

## 🌱 Possíveis Melhorias Futuras

*   Substituir imagens genéricas por exemplos visuais concretos de um mesmo elemento em diferentes LODs.
*   Adicionar mais níveis de LOD (ex: LOD 400, LOD 500) com suas respectivas descrições e imagens.
*   Integrar um visualizador 3D simples (ex: com Three.js ou um viewer de IFC) para carregar modelos de exemplo e talvez filtrar/colorir elementos por LOD.
*   Permitir o carregamento de definições de LOD customizadas (ex: a partir de um arquivo JSON).

---

## 📄 Licença

Este projeto é distribuído sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes (se você adicionar um).

---

Desenvolvido por Emanuel Vargas - https://github.com/scatto-ai