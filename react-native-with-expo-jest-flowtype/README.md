# Readme

## Requirements

** NOTE: CRNA install with **npm@5 is not working as of Oct 10, 2017**

** If you are using yarn for CRNA then you will have to use yarn

** for the entire react project as well. **NPM will just NOT WORK**

** use `yarn` instead

1. Install yarn and watchman
```bash
brew install yarn watchman
```

2. Install CRNA
```bash
$ yarn global add create-react-native-app
# or
$ npm install -g create-react-native-app
```

3. Install eslint
```bash
$ npm install -g eslint
```

## Create Project
```bash
$ create-react-native-app project-name
```


## Patch the project

### Option 1: Aumatic script
```bash
cd project-name
wget -O - https://raw.githubusercontent.com/atton16/js-project-configs/master/react-native-with-expo-jest-flowtype/project-patcher.sh | bash
```

### Option 2: Manual
1. Copy `.eslintrc` to the project

4. Install dependencies
```bash
$ npm i --save-dev babel-eslint eslint eslint-plugin-flowtype eslint-plugin-jest eslint-plugin-react eslint-plugin-react-native jest-cli
```

5. Update the test section of package.json as follows
```json
 "test": "node node_modules/jest/bin/jest.js --watchAll"
```

6. If your are using VSCode then `.vscode/settings.json` could be useful.

7. All good. Do not forget to checkout `structured-component` for better component folder structure.
