# Download .eslintrc
echo "Downloading .eslintrc..."
wget -q https://raw.githubusercontent.com/atton16/js-project-configs/master/react-native-with-expo-jest-flowtype/.eslintrc .eslintrc

# Install dependencies
echo "Installing package dependencies..."
yarn add --silent --dev babel-eslint eslint eslint-plugin-flowtype eslint-plugin-jest eslint-plugin-react eslint-plugin-react-native jest-cli

# Download package.json patch
echo "Downloading package.json patch..."
wget -q https://raw.githubusercontent.com/atton16/js-project-configs/master/react-native-with-expo-jest-flowtype/package.json-crna.patch package.json-crna.patch

# Update package.json
echo "Applying patch..."
patch package.json package.json-crna.patch

# Clean up the patch file
echo "Remove patch file"
rm package.json-crna.patch

# Update VSCode workspace settings
echo "Downloading VSCode workspace settings..."
mkdir -p .vscode
wget -q https://raw.githubusercontent.com/atton16/js-project-configs/master/react-native-with-expo-jest-flowtype/.vscode/settings.json -O .vscode/settings.json

# Install Hello Component dependencies
echo "Installing Hello Project dependencies..."
yarn add --silent serviceprovider rxjs

# Backup old files
echo "Backing up old files..."
mv App.js App.bak.js
mv App.test.js App.test.bak.js

# Download and extract hello-project
echo "Downloading hello project..."
wget -qO- https://github.com/atton16/js-project-configs/raw/master/react-native-with-expo-jest-flowtype/hello-project.tar.gz | tar xvz

# Delete backup files
echo "Remove backup files"
rm App.bak.js
rm App.test.bak.js

# Start the test
echo "Running test..."
./node_modules/.bin/jest --forceExit
