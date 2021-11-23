# fullstack-interview-test
Interview test for fullstack Software Engineers

## Welcome!
This project uses [Django](https://www.djangoproject.com/) for the backend, and [React](https://en.reactjs.org/) for its frontend.

Because both stacks are natively incompatible, and for further configuration of the repositories, this project is separated into two different repositories, this one for the frontend and [this one](https://github.com/lalish99/flat-mx-backend-interview-test/) for the frontend.

You need both projects running in order to see the completed project. Each repository contains instructions on how to run them and which stack is required.

----
## Releases:
For conviniece there is a release changelog, which can be accesed directly [on GitHub](https://github.com/lalish99/flat-mx-backend-interview-test/releases). It contains auto-generated releases, which are composed by all the commits between releases. Check [Semantic Release](https://github.com/semantic-release/semantic-release) for more information.

**Note:**This repository uses a GitHub action for the purpose of generating the semantic release.

----

## Requirements
- Node
- Yarn

### Node
First of all, you need to have node installed on your local machine, if you dont have it installed yet, go to: [https://nodejs.org/es/download/](https://nodejs.org/es/download/) and follow the instructions for your operating system.

**Important:** Make sure you have `node 14` installed.

Alternitavely you can install `NVM` which allowes you to change easily between node versions.
For a guide on how to install `NVM`, follow the next [link](https://github.com/nvm-sh/nvm#installing-and-updating).

### Yarn
This repository uses [Yarn](https://yarnpkg.com/), because of this you must install it if you don't have already, follow the instructions on the next [link](https://classic.yarnpkg.com/lang/en/docs/install/).
**Important:** You must have already installed `Node` with `npm`, which should be installed together if you follow the previous instructions.

----
## Setup Instructions
Before anything we need to clone this repository to our local machine, if it's your first time I highly recommend checking GitHub's guide on [how to clone a repository](https://docs.github.com/es/repositories/creating-and-managing-repositories/cloning-a-repository).

Move to the directory of the cloned repository and follow the next instructions.

Inside the repository, run the following command to install all the dependencies:
```bash
$ yarn install
```
**Important:** Make sure that you are inside of the directory of the cloned repository, else yarn wont install all the required dependencies, and you wont be able to launch the project.

This process might take a few seconds to complete, just be patient.

With the modules installed we can now run the command:
```bash
$ yarn dev
```
**Important:** Make sure that you are inside of the directory of the cloned repository, else you wont be able to run this command.

And this should display a message similar to:
```bash
$ ready - started server on 0.0.0.0:3000, url: http://localhost:3000
$ event - compiled successfully in 103 ms (253 modules)
```
If you are not seeing this message, you can start debugging by checking if a folder named `node_modules` was generated after running `yarn install`, else you might have run the command outside of the project directory. And you must retry the installation.


If everything went well, you can now acces `http://localhost:3000/` on your favorite browser and should see the main page of the project.