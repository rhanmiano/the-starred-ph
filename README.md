# The Starred PH

:star: Top 10 most starred Github repositories in the Philippines

## About

The project aims to be a station for fellow Filipino developers and their projects to be highlighted, so that others may see it as well. This is also a great opportunity for starters, who might be curious, to see the various projects that other tech enthusiasts pursue during their free time and the frameworks they utilize.

More details are provided in [content/about.md](https://github.com/rhanmiano/the-starred-ph/blob/master/content/about.md) file.

## Objectives

1. Promote fellow Pinoy developers and their projects
2. Learn more about unit testing and Github actions
3. Learn how open source community works

## Setup and Dependencies

### System Requirements

It has been years since this project was initially setup and there's a lot that has changed to Vue ecosystem already. The main requirement for this project is Vue 2 and Nuxt 2. Plans to migrate this to Vue 3 and Nuxt 3 is still on research.

As of last commit, the project should work on a local environment with.

```
node v14.21.2
npm 6.14.17
vue 2.6.12
nuxt 2.15.3
```

### Nuxt

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate

# run unit tests
$ npm run test
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

### Github GraphQL API

To be able to request to Github's GraphQL API, one must secure an [OAuth token](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token) with the right scopes. Please follow along with this provided [documentation](https://docs.github.com/en/graphql/guides/forming-calls-with-graphql#authenticating-with-graphql).

### Environment

After the token has been created, make a copy of `.env.sample` file and rename it to `.env` in the project root. Values should be the following:

```bash
# can be production | develop
ENVIRONMENT=develop

GH_GQL_API_URL=https://api.github.com/graphql
GH_GQL_ACCESS_KEY=your-github-access-key-here

# any name here, I named mine tph-github-repos
SESSION_KEY_NAME=tph-github-repos
```

### Rate limit and caching

To avoid excessive calls to Github's GraphQL API, query results are being cached to user's browser using session storage.

## What's next?

At the moment, **The Starred PH** lists works that are made in the Github ecosystem only. The project is eyeing to get lists of top works also in other platforms assuming that those have public facing API.

Ideas such as:

- Most starred artwork in platforms such as Dribbble, Artstation and the likes.
- Most followed Pinoy youtuber, or most viewed video of them.
- And so on, if it can promote our Pinoy creatives.

## Contribute

Hi :wave:, thanks for taking some time to check this project out and further read this document. If it happens that you know Nuxt and have experience in implementing any of the ideas mentioned above, or have some suggestions on the current look/behavior of the site, or seen some inconsistencies, please feel free to submit an issue and/or create a pull request.

Contributions are very much welcome in this project.

Please see [Contributing Guide](https://github.com/rhanmiano/the-starred-ph/blob/master/.github/CONTRIBUTING.md) and [Code of Conduct](https://github.com/rhanmiano/the-starred-ph/blob/master/.github/CODE_OF_CONDUCT.md) to get started.

## License

This project is licensed under [MIT License](https://github.com/rhanmiano/the-starred-ph/blob/master/LICENSE.md)
