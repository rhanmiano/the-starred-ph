import faker from 'faker'

export const getRepo = () => {
  return {
    createdAt: faker.datatype.datetime(),
    description: faker.lorem.sentence(),
    id: faker.datatype.uuid(),
    name: 'sample-github-repo',
    owner: {
      avatarUrl: faker.image.imageUrl(),
      bio: faker.lorem.words(),
      company: faker.company.companyName(),
      followers: {
        totalCount: faker.datatype.number(),
      },
      following: {
        totalCount: faker.datatype.number(),
      },
      id: faker.datatype.uuid(),
      location: faker.address.country(),
      login: faker.internet.userName(),
      name: faker.fake('{{name.firstName}} {{name.lastName}}'),
      repoCount: faker.datatype.number(),
      url: faker.internet.url,
      websiteUrl: faker.internet.url,
    },
    primaryLanguage: {
      color: '#ffffff',
      name: 'Javascript',
    },
    stargazerCount: faker.datatype.number(),
    updatedAt: faker.datatype.datetime(),
    url: faker.internet.url(),
  }
}

export const getRepos = (num = 10) => {
  let repos = []
  console.log('herherhehre')
  for (let i = 0; i < num.length; i++) {
    const repo = getRepo()
    console.log('repo', repo)
    repos.push(repo)
  }
  console.log('repos', repos)
  return repos
}
