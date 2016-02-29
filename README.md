# Init

[![David](https://img.shields.io/david/kreativgebiet/init.svg)](https://david-dm.org/kreativgebiet/init) [![npm](https://img.shields.io/npm/v/init-cli.svg)](https://www.npmjs.com/package/init-cli) [![npm](https://img.shields.io/npm/l/init-cli.svg)](LICENSE) 

Init is a new tool to quickly scaffold new projects. You can spot init projects by their `.init` file in the root of the GitHub project. It uses [Nunjucks](https://mozilla.github.io/nunjucks/), a powerful templating engine powered by Jinja2. You can use any of the methods documented on the Nunjucks documentation.

#### Proudly sponsored by

[![Kreativgebiet](http://files.kreativgebiet.com/statics/logo.svg)](http://kreativgebiet.com/)

## Why?

We at Kreativgebiet saw [Pollinate](https://github.com/everysquare/pollinate) by EverySquare the other day. Since we liked the approach but didn't want to have a json file for every project we wanted to create something that prompts the user in real-time about the data it should insert.

*Disclaimer: Code heavily inspired by Pollinate*

## Installation

To use the `init` command globally install it using the `-g` argument of the `npm install` command like this:

```
npm install -g init-cli
```

## How it works

Init uses Nunjucks to insert context data into the templates it grabs from GitHub (and soon other git sources and local folders). Use Nunjucks templating language (powered by Jinja2) to implement dynamic project scaffolds.

## How to use

It's simple to use Init for scaffolding a new codebase for you next project. Simple search for a init template on GitHub and use the `username/reponame` to scaffold the project.
Let's assume the username is `kreativgebiet` and the projectname is `init-example`. To scaffold a new project from this repository, simply use the following command:

```
scaffolder kreativgebiet/init-example
```

Since this feature isn't implemented, yet, you can initialize a new git repository with the following command and start developing with git.

```
git init
```

Basically just replace kreativgebiet with the username and scaffolder-example with the repository name.

#### Options to be added

In the future some options will be added to the project.

- [x] `--no-init` – initializing a new git project
- [x] `--no-git` – don't initialize anything on the folder
- [ ] `--hub repo-name` – create a new public repository on github

## What's next?

- [x] Scaffolding from GitHub
- [ ] Scaffolding from other git sources (GitLab, Bitbucket, etc.)
- [ ] Scaffolding from a local folder
- [ ] Scaffolding from an npm package
- [ ] Scaffolding from for yeoman packages (not yet fixed)
- [x] Automatically exec `git init` on project scaffolding
- [x] Automatically create the first commit

## [License](LICENSE)

This project is owned by Kreativgebiet and licensed under MIT license
