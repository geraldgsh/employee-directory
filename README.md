# Employee-Directory

React and Redux

### Snapshot

![](https://github.com/geraldgsh/employee-directory/blob/development/src/assets/images/screenshot.jpg?raw=true)

### Introduction.

A directory application allows employees of a company to explore the company structure and organizational architecture. A user of the application is able to see the names and team members of every supervisor.

### Requirements

1. Only one endpoint is given:
• http://api.additivasia.io/api/v1/assignment/employees/{employeeName}
• Returns direct subordinates (e.g. ['technical lead’, { 'direct-subordinates': ['Samad Pitt', ‘Leanna Hogg']}];
• To get all non-direct subordinates you have to use / http://api.additivasia.io/api/v1/assignment/employees/{employeeName} again and again

2. API all used employee names (for verification, do not use this endpoint): http://api.additiva-
sia.io/api/v1/assignment/employees Solution must work on latest version of Chrome.

3. Mock of layout is given under technical requirement.

4. Use any third party libraries or starter projects.

6. Solution will be use in production.

7.  Data-structures and time-complexity of algorithms is very important and will be properly evaluated.

8. Any improvements and additional features are welcome. (Help: “John Hartman” shall return 8 employees in overview)

### Layout

#### Home Screen

Overview Screen
+————————————————————————————————+
|                                |
|                                |
| Employee Explorer              |
|                                |
|                                |
| +————————————+—————+           |
| | John Hartman | SEARCH |      |
| +————————————+—————+           |
|                                |
|                                |
|                                |
+————————————————————————————————+

#### Overview Screen

+————————————————————————————————+
| 				                 |
| 				                 |
| Employee Overview 		     |
| 				                 |
| 				                 |
| Subordinates of employee       |
| John Hartman:			         |
|				                 |
| FullName1 			         |
| FullName2 			         |
| FullName3 			         |
| 				                 |
+————————————————————————————————+

### Tools

* React
* React-DOM
* React-Create-App
* NPM
* CSS
* ES6
* Webpack
* Material UI

# React and Redux

This is the **GitHub Actions configuration**. If you are looking for the **Stickler configuration**, you can find it [here](https://github.com/microverseinc/linters-config/tree/Stickler/react-redux).

If you are not familiar with linters and GitHub Actions, read [root level README](../README.md).

## Set-up GitHub Actions

This GitHub Action is going to run [ESLint](https://eslint.org/) and [Stylelint](https://stylelint.io/) to help you find style issues.

[Stylelint](https://stylelint.io/) is a linter for your stylesheets that helps you avoid errors and enforce conventions.

[ESLint](https://eslint.org/) is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs.

Please do the following **steps in this order**:

1. In the first commit of your feature branch create a `.github/workflows` folder and add a copy of [`.github/workflows/linters.yml`](.github/workflows/linters.yml) to that folder.
    - **Remember** to use the file linked above
    - **Remember** that `.github` folder starts with a dot.
2. **Do not make any changes in config files - they represent style guidelines that you share with your team - which is a group of all Microverse students.**
    - If you think that change is necessary - open a [Pull Request in this repository](../README.md#contributing) and let your code reviewer know about it.
3. When you open your first pull request you should see the result of the GitHub Actions:

![gh actions checks](https://github.com/microverseinc/linters-config/blob/master/assets/images/gh-actions-eslint-stylelint-checks.png)

Click on the `Details` link to see the full output and the errors that need to be fixed:

![gh actions failing checks](https://github.com/microverseinc/linters-config/blob/master/assets/images/gh-actions-html-css-failing-checks.png)

## Set-up linters in your local env

### ESLint

1. Run `npm install --save-dev eslint@6.8.x eslint-config-airbnb@18.1.x eslint-plugin-import@2.20.x eslint-plugin-jsx-a11y@6.2.x eslint-plugin-react@7.20.x eslint-plugin-react-hooks@2.5.x` (not sure how to use npm? Read [this](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)).

```
$ npm install --save-dev eslint@6.8.x eslint-config-airbnb@18.1.x eslint-plugin-import@2.20.x eslint-plugin-jsx-a11y@6.2.x eslint-plugin-react@7.20.x eslint-plugin-react-hooks@2.5.x

+ eslint-config-airbnb@18.1.0
+ eslint-plugin-react@7.20.6
+ eslint-plugin-import@2.20.2
+ eslint-plugin-jsx-a11y@6.2.3
+ eslint-plugin-react-hooks@2.5.1
+ eslint@6.8.0
added 456 packages from 105 contributors, removed 150 packages, updated 1384 packages and audited 1851 packages in 264.998s

70 packages are looking for funding
```

2. Copy [.eslintrc.json](./.eslintrc.json) to the root directory of your project.
3. **Do not make any changes in config files - they represent style guidelines that you share with your team - which is a group of all Microverse students.**
    - If you think that change is necessary - open a [Pull Request in this repository](../README.md#contributing) and let your code reviewer know about it.
4. Run `npx eslint .` on the root of your directory of your project.
5. Fix linter errors.
6. **IMPORTANT NOTE**: feel free to research [auto-correct options for Stylelint](https://stylelint.io/user-guide/cli#autofixing-errors) if you get a flood of errors but keep in mind that correcting style errors manually will help you to make a habit of writing a clean code!

### Stylelint

1. Run

   ```
   npm install --save-dev stylelint@13.3.x stylelint-scss@3.17.x stylelint-config-standard@20.0.x stylelint-csstree-validator
   ```

   (not sure how to use npm? Read [this](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)).


```
$ npm install --save-dev stylelint@13.3.x stylelint-scss@3.17.x stylelint-config-standard@20.0.x stylelint-csstree-validator

+ stylelint-config-standard@20.0.0
+ stylelint-csstree-validator@1.8.0
+ stylelint-scss@3.17.2
+ stylelint@13.3.3
added 136 packages from 91 contributors, removed 10 packages, updated 6 packages and audited 1987 packages in 67.901s

113 packages are looking for funding
```

2. Copy [.stylelintrc.json](./.stylelintrc.json) to the root directory of your project.
3. **Do not make any changes in config files - they represent style guidelines that you share with your team - which is a group of all Microverse students.**
   - If you think that change is necessary - open a [Pull Request in this repository](../README.md#contributing) and let your code reviewer know about it.
4. Run
   ```
   npx stylelint "**/*.{css,scss}"
   ```
   on the root of your directory of your project.
5. Fix linter errors.
6. **IMPORTANT NOTE**: feel free to research [auto-correct options for Stylelint](https://stylelint.io/user-guide/cli#autofixing-errors) if you get a flood of errors but keep in mind that correcting style errors manually will help you to make a habit of writing a clean code!

## Test/Deployment Actions

Feel free to add your own deployment actions which can run your tests and deploy to Heroku.

Make sure that you do not modify the [`.github/workflows/linters.yml`](.github/workflows/linters.yml) but that you create a separe GitHub Action workflow file for that.

### Future Features

1. 
2. 

### To begin

1. Clone Repo
2. 'npm install' to install dependencies
3. `yarn start` or 'npm start' on terminal
4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### To test

1. `yarn test` or 'npm test' or 'npm test <folder name>' on terminal

### Wiki

Checkout our [wikipage](https://github.com/geraldgsh/employee-directory/wiki) for more details. 

#### Live Demo
[Demo](https://company-directory.netlify.com)

#### Getting Started
Clone repo and open index.html with your favorite browser.

#### Prerequisites
Web browser like Chrome, Mozilla or similar.

### Original Project Source


### Github Repo
https://github.com/geraldgsh/employee-directory

👤 **Author**

Github: [geraldgsh](https://github.com/geraldgsh)

Twitter: [geraldgsh](https://twitter.com/geraldgsh)

Linkedin: [Gerald Goh](https://www.linkedin.com/geraldgsh)

## 🤝 Contributing
Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](https://github.com/geraldgsh/employee-directory/issues).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc

## 📝 License

This project is [MIT](lic.url) licensed.
