---
title: About - The Starred PH
description: This page describes the project name "The Starred PH", and how it came to be.
author: Rhan Miano
---

# The Starred PH

Top 10 most starred Github repositories in the Philippines

## Context

In the ever growing horizon of people and set of technologies available in the development bubble nowadays, it can be a challenge for new Filipino devs to find inspiration and guidance.

The project aims to be a station for fellow Filipino developers and their projects to be highlighted, so that others may see it as well. This is also a great opportunity for starters, who might be curious, to see the various projects that other tech enthusiasts pursue during their free time and the frameworks they utilize.

If you like their work, do not forget to hit the ⭐ &nbsp;button on their project repository.
</span>

## Inspirations

This project is inspired by the following existing projects:

- [Github Ranking](https://github.com/EvanLi/Github-Ranking) - a list of the most github stars and forks repositories.
- [Commit Tops](https://github.com/lauripiispanen/most-active-github-users-counter) - a CLI tool that queries the GitHub GraphQL API for users and ranks them according to number of contributions.

## How is the list being generated?

1. Fetch first 50 most followed Github users/orgs with "philippines" & "+ph" indicated in their location.
2. Users must have at least 50 followers. Orgs must have at least 10 followers.
3. List their top 10 repos based on stargazers count. (The project limits the list in to top 10 repositories only for now)
4. Repository must be public, must be originally owned by the user and is not forked.
5. Merge all collected repos. Sort those from highest stargazer count. Should there be any duplicate by owner's id, retain the one with the highest stargazers count, and then get the top 10.

### Caveats

Since the location is a free-text, users with cities only or did not indicated their location at all will not be included in the searching. This can be resolved by indicating "Philippines" or "PH" in your location. `e.g. Manila, Philippines or Manila, PH`

## Contribute

This project is open for contribution.

For more details please see [github](https://github.com/rhanmiano/the-starred-ph) repo.
