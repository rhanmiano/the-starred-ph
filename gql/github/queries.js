export const GET_REPOS_BY_USER = () => {
  return {
    query: `query
    {
      search(type: USER, query: "location:philippines location:+ph sort:followers-desc followers:>=10 type:user", first: 100) {
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

export const GET_REPOS_BY_ORG = () => {
  return {
    query: `query
    {
      search(type: USER, query: "location:philippines location:+ph sort:followers-desc followers:>=10 type:org", first: 100) {
        userCount
        edges {
          node {
            __typename
            ... on Organization {
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
                      ... on Organization {
                        id
                        avatarUrl
                        location
                        websiteUrl
                        name
                        login
                        url
                        sponsors {
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
