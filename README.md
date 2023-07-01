# PalestraPotidayJsLibs

This lib was created with the `npx @andersonsmed/create-js-lib` command.

Following is a list with all the basic info that you might want know about.

## Before start coding

The entry point for your lib is the `src/index.js` file, so you can update it as your will.

This lib comes with [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) configured so you can have static validation and enforced code style by default. You can change it's configurations at any time by changing the `.eslintrc.json` and `.prettierrc` files.

Also, this lib comes with some [git hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks) installed by default, managed by [Husky](https://www.npmjs.com/package/husky). They will be useful to running some validations just before a new commit is created.

## How to sync with a remote repository
> These steps must be done only once after the lib is created

During the setup, a `git init` command is executed just after the lib is created.

So, in order to sync your lib with a remote repository, you just need to run the following commands in your terminal:
> The `repository_url` should be replaced by a URL that looks like `git@github.com:user/repository.git`
```
git add .
git commit -m "Initial project"
git branch -M main
git remote add origin repository_url
git push -u origin main
```


## Releasing a new version

This lib uses [semantic versioning](https://docs.npmjs.com/about-semantic-versioning) to handle versioning. So, in order to publishing your changes, you'll need to create a version incrementing the lib with all the changes.

To make it more clear, let's mock it up.

Lets say that the version of your lib is `0.0.1` and you want to release a new PATCH. So, following the semantic versioning guidelines the next released version should be `0.0.2`.

Now, in order to increase the `version` field of the `package.json`, automatically create a new [git tag](https://git-scm.com/book/en/v2/Git-Basics-Tagging) for this version, and publish it to the registry you can use the following commands in your terminal:

```
npm version 0.0.2
git push --follow-tags
npm publish
```

It's worth mentioning that the `npm publish` command might fail due to an authentication failure. If that happen, you can run a `npm login` command and your terminal, log in with your [npm registry](https://www.npmjs.com/) credentials, and then run only the `npm publish` command again.

## Command reference

This lib comes with some useful scripts in the `package.json` file. Following is a table describing them:

| Script            | Description                                                                                                 |
|-------------------|-------------------------------------------------------------------------------------------------------------|
| `lint`            | Runs ESLint to search for linting errors in the `./src` directory.                                    |
| `lint:fix`        | Runs ESLint with the `--fix` flag to automatically fix linting errors in the `./src` directory.              |
| `test`            | Echoes the message "no test found". This script is a placeholder and doesn't run any actual tests.   |
| `prepublishOnly`  | Runs the `build` script before publishing the lib to a registry.                                                      |
| `build`           | Creates a production build of the lib inside the `/lib` directory.                   |
| `dev`             | Creates a development build of the lib in watch mode and runs `npm link` to test it locally.    |

## References

- [About configuring Prettier](https://prettier.io/docs/en/options.html)
- [About configuring ESLint](https://eslint.org/docs/latest/use/configure/)
- [About configuring Babel](https://babeljs.io/docs/configuration)
- [About configuring Webpack](https://webpack.js.org/configuration/)
- [About Husky](https://typicode.github.io/husky/guide.html)