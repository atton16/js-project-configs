# Readme

1. Install CRNA

** NOTE: CRNA install with **npm@5 is not working as of Oct 10, 2017**

** If you are using yarn for CRNA then you will have to use yarn

** for the entire react project as well. **NPM will just NOT WORK**

** use `yarn` instead
```bash
$ npm install -g create-react-native-app
  # or
$ yarn global add create-react-native-app
```

(To install yarn)
```bash
brew install yarn
```

2. Create Project
```bash
$ create-react-native-app project-name
```

3. Copy `.eslintrc` to the project

** NOTE: this required eslint (`$ npm install -g eslint`)

4. Install dependencies
```bash
$ npm i --save-dev babel-eslint eslint eslint-plugin-flowtype eslint-plugin-jest eslint-plugin-react eslint-plugin-react-native jest-cli
```

5. Update the test section of package.json as follows
```bash
 "test": "node node_modules/jest/bin/jest.js --watch"
```

6. If your are using VSCode then `.vscode/settings.json` could be useful.

7. All good. Do not forget to checkout `structured-component` for better component folder structure.
