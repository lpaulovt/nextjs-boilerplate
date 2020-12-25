<h1 align="center">
    <img alt="Logo NextJS" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/200px-Nextjs-logo.svg.png" />
    <br>
    NextJS Boilerplate
</h1>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/lpaulovt/nextjs-boilerplate.svg">
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/lpaulovt/nextjs-boilerplate.svg">
  <a href="https://github.com/lpaulovt/nextjs-boilerplater/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/lpaulovt/nextjs-boilerplate.svg">
  </a>

  <a href="https://github.com/lpaulovt/nextjs-boilerplate/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/lpaulovt/nextjs-boilerplate.svg">
  </a>
</p>

This boilerplate was developed with the following technologies:

- [NextJS]()
- [React]()
- [Typescript]()
- [styled-components](https://www.styled-components.com/)
- [Next-PWA]()
- [Storybook]()
- [Jest]()
- [React Testing Library]()
- [Babel]()
- [EsLint]()
- [Prettier]()
- [EditorConfig]()
- [VS Code](vscode)

<br>

## :memo: File Structure

---

```bash
nextjs-boilerplate
├── node_modules/
├── .next/
├── .jest/
│   └── setup.ts
├── .storybook/
│   ├── main.js
│   └── preview.js
├── public/
│   ├── img/
│   │   └── images.*
│   ├── manifest.json
│   ├── sw.js
│   └── workbox*.js
├── src/
│   ├── components/
│   │   └── Component/
│   │        ├─── index.tsx
│   │        ├─── stories.tsx
│   │        ├─── styles.ts
│   │        └─── test.tsx
│   ├── pages/
│   │   ├── _app.tsx
│   │   ├── _document.tsx
│   │   └── index.tsx
│   └── styles/
│       └── global.ts
├── .babelrc
├── .editorconfig
├── .eslintrc.json
├── .gitignore
├── .prettierrc
├── jest.config.js
├── next-env.d.ts
├── next.config.js
├── .package.json
├── README.md
├── tsconfig.json
└── yarn.lock
```

<br>

## :information_source: How To Use

---

```bash
# Create a project using this boilerplate
$ yarn create next-app https://github.com/lpaulovt/nextjs-boilerplate

# ✔ What is your project named?
$ project-name

# Install dependencies
$ yarn install

# Run the app
$ yarn dev

# Run tests
$ yarn test:watch

# Run storybook
$ yarn storybook

# Run build
$ yarn build
```

Made with ♥ by Paulo Lopes :wave: [Get in touch!](https://www.linkedin.com/in/lpaulovt/)
