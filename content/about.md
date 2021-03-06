---
title: About - The Starred PH
description: This page describes the project name "The Starred PH", and how it came to be.
author: Rhan Miano
---

# The Starred PH

Top 10 most starred Github repositories in the Philippines

## Context

In the ever growing horizon of people and set of technologies available in the development bubble nowadays. For filipino rookies, it is kind of challenging to find inspirations in which they could delve in to.

The project aims to be a station for fellow pinoy developers and their projects to be promoted, so that others may see it as well. For starters also, who might be curious of what other tech craftsmen do at their spare time and what frameworks they use.

If you like their work, do not forget to hit the ⭐ &nbsp;button on their project repository.
</span>

## Inspirations

This project is inspired by the following existing projects:

- [Github Ranking](https://github.com/EvanLi/Github-Ranking) - a list of the most github stars and forks repositories.
- [Commit Tops](https://github.com/lauripiispanen/most-active-github-users-counter) - a CLI tool that queries the GitHub GraphQL API for users and ranks them according to number of contributions.

## How is the list being generated?

1. Fetch 100 most followed Github users with "philippines" indicated in their location.
2. Users must have at least 10 followers.
3. List their top 10 repos based on stargazers count. (The project limits the list in to top 10 repositories only for now, and there's a possibility that a user's repositories may fill in one or more spot in the list)
4. Repository must be public, must be originally owned by the user and is not forked.
5. Do steps 1 to 4 but with users with ",+ph" indicated in their location.
6. Merge all collected repos and sort those from highest stargazer count, get the top 10.

### Caveats

Since the users' location is free-text, users with cities only or did not indicated their location at all will not be included in the searching. This can be resolved by indicating "Philippines" or "PH" in your location. `e.g. Manila, Philippines or Manila, PH`

Also, repositories that are being searched in the query are created by individual users not by organizations.

## Contribute

This project is open for contribution.

For more details please see [github](https://github.com/rhanmiano/the-starred-ph) repo.
