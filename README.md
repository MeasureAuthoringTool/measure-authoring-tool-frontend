# Measure Authoring Tool Frontend
React front end for the Measure Authoring Tool

## Installation
```bash
# Installs all dependencies needed for the project.
$ npm install
```

## Running
```bash 
# Runs the the app in development mode. Open http://localhost:3000 to view application in browser. Will show lint errors in the console.
$ npm start

# Builds the app for production to the build/ folder. Builds optimized and minified.
$ npm run build
```

## Testing
```bash
# Launches the test runner in the interactive watch mode.
$ npm test

# Runs the linter, which includes a JavaScript Linter and a React Linter (jsx and jsx-ally)
$ npm run lint

# Launches the test runner and runs the test with coverage (this will take longer). 
$ npm run test:cov
```

## Documentation
To generate the markdown docs, run the following command from the root directory of the project.

```bash
 npm run docs:gen
```

This will remove the existing docs folder, create a new docs folder, and generate the component documentation into the docs folder. 

## Configuring Development Environment
### Node.js and NPM
1. [Install Node.js and npm]("https://nodejs.org/en/download/")

### Editor

> All steps below are optional. You can use whichever editor you wish and configure it however you want. 

#### VSCode
1. [Install VSCode](https://code.visualstudio.com/download)
2. [Install React Extension Pack](https://marketplace.visualstudio.com/items?itemName=jawandarajbir.react-vscode-extension-pack)
3. Install JavaScript and TypeScript Support
4. [Install Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)
5. [Install ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
User Workspace settings : Add the below lines in settings.json
```
{
    "workbench.startupEditor": "newUntitledFile",
    "files.autoSave": "afterDelay",
    "files.insertFinalNewline": true,
    "files.eol": "\n",
    "editor.tabSize": 2,
    "eslint.autoFixOnSave": true
}
```

### Install Code Base
1. Clone the project from the Git Repository
2. `cd /path/to/measure-authoring-tool-frontend`
3. `npm install`
4. `npm start`

## Directory Stucture
| Directory     | Description                                                                                                                                                                  |
|---------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `/actions`    | This directory should hold all of the actions for Redux. Each file should correspond to some module in the application.                                                      |
| `/components` | This directory should hold all of the components for the application. Each file should be a component. Sub directories should correspond to some module of the application.  |
| `/css`        | This directory should hold all of the css files needed for the application.                                                                                                  |
| `/docs`      | This directory should hold the generated React Component Documentation.                                                                                                       |
| `/fonts`      | This directory should hold all of the font files needed for the application.                                                                                                 |
| `/images`     | This directory should hold all of the images needed for the application.                                                                                                     |
| `/reducers`   | This directory should hold all of the reducers for Redux. Each file should correspond to some module in the application.                                                     |
| `/store`      | This directory should hold the information needed for the Redux store.                                                                                                       |



## Help
| Tool              | Documentation Link                                            |
|-------------------|---------------------------------------------------------------|
| Node.js           | https://nodejs.org/en/docs/                                   |
| NPM               | https://docs.npmjs.com/                                       |
| React             | https://reactjs.org/docs/getting-started.html                 |
| react-router      | https://reacttraining.com/react-router/web/guides/quick-start |
| redux             | https://redux.js.org/introduction/getting-started             |
| react-redux       | https://redux.js.org/basics/usage-with-react                  |
| CMS Design System | https://design.cms.gov/                                       |
|                   |                                                               |