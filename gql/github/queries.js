export const GET_USER_COUNT = (location) => {
  return {
    query: `query {
      search(type: USER query: "location:${location}" first: 1) {
        userCount
      }
    }`,
  }
}

export const GET_REPOS = (location, first) => {
  return {
    query: `query
    {
      search(type: USER, query: "location:${location} sort:followers-desc followers:>=10", first: ${first}) {
        userCount
        edges {
          node {
            __typename
            ... on User {
              repositories(privacy: PUBLIC, ownerAffiliations: OWNER, isFork: false, orderBy: {field: STARGAZERS, direction: DESC}, first: 10) {
                edges {
                  node {
                    id
                    name
                    url
                    description
                    createdAt
                    updatedAt
                    pushedAt
                    stargazerCount
                    owner {
                      ... on User {
                        id
                        bio
                        avatarUrl
                        company
                        location
                        websiteUrl
                        name
                        login
                        url
                        followers(first: 1) {
                          totalCount
                        }
                        following(first: 1) {
                          totalCount
                        }
                      }
                    }
                    primaryLanguage {
                      color
                      name
                    }
                  }
                }
                totalCount
              }
            }
          }
        }
      }
    }`,
  }
}
