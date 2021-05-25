# The Starred PH

:star: Top 10 most starred Github repositories initiated by developers located in the Philippines

## About

The project aims to be a station for fellow pinoy developers and their projects to be promoted, so that others may see it as well. For starters also, who might be curious of what other tech craftsmen do at their spare time and what frameworks they use.

More details are provided in [content/about.md](https://github.com/rhanmiano/the-starred-ph/blob/master/content/about.md) file.

## Objectives

1. Promote fellow pinoy developers and their projects
2. Learn more about testing and Github actions
3. Learn how open source community works

## Setup and Dependencies

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
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

### Github Graphql API

To be able to request to Github's Graphql API, one must secure an [OAuth token](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token) with the right scopes. Please follow along with this provided [documentation](https://docs.github.com/en/graphql/guides/forming-calls-with-graphql#authenticating-with-graphql).

After the token has been created, create a `.env` file and provide its value to `GH_GQL_ACCESS_KEY`

### Rate limit and caching

To avoid excessive calls to Github's Graphql API, query results are being cached to user's browser's session storage.

## What's next?

At the moment The Starred PH lists works made in the Github only. The project is eyeing to get lists of top works also in other platforms assuming that the platform has a public facing API.

Ideas such as:

- Most starred artwork in platforms such as Dribbble, Artstation and the likes.
- Most followed pinoy youtuber, or most viewed video of them.
- And so on, if it can promote our Pinoy creatives.

## Contribute

Hi :wave:, thanks for taking some time to read this document. If it happens that you know Nuxt and have experience in implementing any of the ideas mentioned above, or have some suggestions on the current look/behavior of the site, or seen some inconsistencies, please feel free to submit an issue and/or create a pull request.

Contributions are very much welcome in this project.

Please see Contributing Guide and Code of Conduct to get started.

## License

This project is licensed under [MIT License](https://github.com/rhanmiano/the-starred-ph/blob/master/LICENSE.md)
