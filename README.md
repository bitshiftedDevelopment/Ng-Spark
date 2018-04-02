# Ng-Spark

<em>Rework of Spark using knowledge gained so far</em>

![license](https://img.shields.io/github/license/bitshiftedDevelopment/Ng-Spark.svg)
![Travis branch](https://img.shields.io/travis/bitshiftedDevelopment/Ng-Spark/master.svg)
![GitHub last commit](https://img.shields.io/github/last-commit/bitshiftedDevelopment/Ng-Spark.svg)

### Branch: Unstable
Target for incoming merges to ensure they function as intended prior to adding them to the stable codebase

## Feature Roadmap
- Material Design
- Flex layout
- Firebase authentication
- Firestore document storage
- Modular components for examples

## Getting Started
Starting a new project with Ng-Spark is easy. Follow the steps below to get up and running in no time.
```
cd
git clone https://github.com/bitshiftedDevelopment/Ng-Spark.git <my-project-name>
cd <my-project-name>
yarn install
```
Once Yarn finishes installing all the packages, you can start the development server one of two ways.

`yarn start` will run `ng serve`

`yarn live` will run `ng serve --host 0.0.0.0` to allow access from outside localhost

**NOTE**: This repository includes hooks that may be used.  Each hook contains a description of what it does within the file. Make use of these by running `git config core.hooksPath .git-hooks` in your root directory.

To get started creating your new app, simply include the modules you want to use in app.module and make use of the components contained within.
