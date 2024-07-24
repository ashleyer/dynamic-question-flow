# vue-project

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

Let’s make sure you are correctly using Vue CLI to handle your project setup. If you haven’t already, follow these steps to set up your Vue.js project properly:

Step-by-Step Guide

	1.	Install Vue CLI (if not already installed):
npm install -g @vue/cli
2.	Create a New Vue Project:
Navigate to your desired directory and create a new Vue project:
vue create dynamic-question-flow
Follow the prompts to set up your project. Choose the default preset if you’re unsure.

	3.	Replace the Default Files with Your Project Files:
After creating the project, navigate to the project directory and replace the default files with your project files:
cd dynamic-question-flow
Update your project structure to match this:
dynamic-question-flow/
├── public/
│   └── index.html
├── src/
│   ├── App.vue
│   ├── main.js
│   ├── router.js
│   └── components/
│       ├── PersonalInfo.vue
│       ├── PartnerInfo.vue
│       ├── ChildrenInfo.vue
│       ├── ResidenceInfo.vue
│       ├── OtherRealEstate.vue
│       └── Preview.vue
├── .eslintrc.json
├── package.json
└── README.md
