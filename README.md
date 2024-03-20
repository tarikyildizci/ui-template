# Target Project Frontend

## Installation

1. Install nodejs => https://nodejs.org/en/download
2. Install yarn => https://yarnpkg.com/
3. Run `yarn` to install libraries
4. Run `yarn hak` or `yarn dev` to start the local development server

## Important Libraries

### React

We use React as our UI framework for its component-based structure and huge community.

### Typescript

Typescript brings type-safety to javascript, allowing for developers to code fast without breaking things.

### React Router

A well tested react router library, with huge community support and easy route handling.

### Redux & Redux Toolkit

Although heavy and maybe overkill, redux solves a huge variety of state management problems, with good community resources. RTK is mainly included for RTKQuery, which is a great way to handle server state (api calls) with a caching mechanism and its React api has a great DX.

### Husky, Prettier & ESLint

We have pre-commit hooks that runs before each commit and does code formatting (Prettier), linting (ESLint), and commit message standardization (Husky).

### shadcn/ui & Tailwind

shadcn/ui is a component repository built on top of RadixUI, known for accessible components. It is relatively new, but the architecture and mindset behind it is preferred. We use tailwind as our main styling solution because of shadcn/ui's dependency on it.

### React Hook Form & zod

RHF & zod are a dream team for validating and handling form state in React apps, preferred because of great solutions and typescript support.

### i18next

We use i18next for our translations, but currently only have English as our language. This library is included from the beginning to reduce refactoring costs in the future if more languages are needed.

## File Structure

The config files are in the root directory. Public folder is untouched by vite and is directly included in the final build. Translations are under **public/locales** in the language folders like **public/locales/en/translations.json**. The main language for the app is English. The main folder for the app is **src**.

### /components

The folder **ui** holds shadcn/ui components & custom _primitive_ ui components.

### /lib

For hooks & utils functions.

### /assets

For images & svg files.

### /pages

For react components that correlate with the routing and business logic of the app.

### /containers

For components too complex/specialized for **/components**, but reused in multiple places.

### /store

For redux state related files.

### /services

For rtkQuery api declarations & types.

## Best Practices

1. Prefer absolute imports over relative imports.
2. Include **index.ts** files for folders (usually), export all items needed from outside. Use index files only for exporting.
3. Avoid unnecessary useEffect calls. (https://react.dev/learn/you-might-not-need-an-effect, https://overreacted.io/a-complete-guide-to-useeffect/)
4. Prefer type **unknown** over **any**.
5. Prefer arrow functions.
6. This repo uses **husky** (https://typicode.github.io/husky/) to lint commit messages and add pre-commit hooks.

---

# Boilerplate README - React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
