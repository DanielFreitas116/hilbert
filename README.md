# David Hilbert e os Espaços de Hilbert

Projeto Vite + React preparado para edição local e publicação no GitHub Pages.

## Desenvolvimento

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy no GitHub Pages

O projeto já inclui `.github/workflows/deploy.yml`, por isso o deploy é automático.

1. Fazer push do projeto para o repositório `DanielFreitas116/hilbert`.
2. No GitHub, abrir `Settings > Pages`.
3. Em `Build and deployment`, escolher `Source: GitHub Actions`.
4. Confirmar que o branch principal é `main`.
5. Fazer novo push para `main`.
6. O site será publicado no endereço:

```text
https://danielfreitas116.github.io/hilbert/
```

## Conteúdo editável

O conteúdo principal está em `src/App.jsx`.
