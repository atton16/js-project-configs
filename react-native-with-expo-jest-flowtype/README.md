# Readme

1. Install CRNA

** NOTE: CRNA install with **npm@5 is not working as of Oct 10, 2017**

** If you are using yarn for CRNA then you will have to use yarn

** for the entire react project as well. **NPM will just NOT WORK**

** use `yarn` instead
```
$ npm install -g create-react-native-app
  # or
$ yarn global add create-react-native-app
```

(To install yarn)
```
brew install yarn
```

2. Create Project
```
$ create-react-native-app project-name
```

3. Copy `.eslintrc` to the project

** NOTE: this required eslint (`$ npm install -g eslint`)

4. Patch `package.json` and `npm install`

5. If your are using VSCode then `.vscode/settings.json` could be useful.

6. All good. Do not forget to checkout `structured-component` for better component folder structure.
