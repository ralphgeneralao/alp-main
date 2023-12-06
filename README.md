# A Learning Place A Teaching Place - Main

This is a Subsite for Admin Resource Management.

To understand this frontend app, you must know or learn these technologies.

- ReactJS
- Typescript
- ES6+ features
- Redux
- RTK Query
- SASS/SCSS
- GraphQL

If you are a new developer joining this project, please set-up your development environment first by following the instructions below.

## Available Documentations

- [Project Code Architecture](docs/CodeArchitecture.md)
- [How to Manage and Use Nucleo Icons](src/assets/nucleo-icons/README.NucleoIcons.md)
- [Redux Store Documentations](src/store/REAME.store.md)

---

## Setting up Your Development Environment

**PRE-REQUISITE:** You must first complete the `backend - Setting up Your Development Environment`.

Most of the set-up for dev environment has been done in backend so
once all the prerequisite is done, you can now proceed with the very easy steps below

1. Install the following tools if you don't have them

   - [Visual Studio Code](https://code.visualstudio.com/)
     - Recommended extensions:
       - Apollo GraphQL
       - Prettier - Code formatter
       - ESLint
       - ES7 - React/Redux/React-Native snippets
       - GitLense
   - [Git](https://git-scm.com/downloads)
   - [NodeJS](https://nodejs.org/en/download/)
   - [Nucleo App](https://nucleoapp.com/)

2. Clone this repository to your local repository.
3. Go to the cloned project's root folder and run `npm install`
4. Run frontend using this command `npm start`.

You can test all of your API using this GraphQL playground. Always test your API(s) here first before consuming them in Frontend to make your life and debugging much easier.

<br />

---

## Make your Development Easier with Prettier

We have a `prettier` config in this project so that developers have same way of formatting the code. To format your current file, you just press `Alt + Shift + F` and when it ask you a prompt, choose the project's prettier config. This is good but you have to do this everytime you want to format the file. To make the formatting automatic, follow the steps below.

1. Open VS Code settings by pressing `Ctrl +  ,` or clicking the cog icon at lower left and select `Settings`.
2. In the settings, search `Format` and check `Format On Save` settings ![certificate](/docs/images/formatonsave.PNG) and save.
3. Go to any file in `src/` and press `Alt + Shift + F`, when it asks you a prompt, choose the project's prettier config. Save.

Now everytime you save, it will automatically format your code using your prettier config. This is really good because you dont have to care about your code formatting anymore. Just code and prettier formats it for you on Save!

---

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run prettier-format`

Initiates a command that goes thru all of your files `{ts,tsx,scss,css,json}` and format it all accordingly \
based on your `.prettierrc` configuration

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
