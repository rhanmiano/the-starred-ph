# Contributing to The Starred PH

Hi, kamusta?! :raised_hands: First off, thank you for the interest of contributing to this kind of project. :raised_hands:

Please be informed that the author of this project is new to Open Source. If there seems lacking on this document or in the process as a whole, please feel free to contact __rhanmiano29@gmail.com__.

#### Table of Contents

[Introduction](#introduction)

[Code of Conduct](#code-of-conduct)

[Getting Started](#getting-started)

[How can I contribute?](#introduction)

- [Reporting an issue](#reporting-an-issue)
- [Adding a feature](#adding-a-feature)
- [Pull requests](#pull-requests)

## Introduction

This document aims to list down set of guidelines for contributors to strictly adhere to. Please enjoy contributing!

## Code of Conduct

For the developers, maintainers and supporters to establish a safe and joyful environment, everyone who will be participating in this project is expected to have read the **[Code of Conduct](https://github.com/rhanmiano/the-starred-ph/blob/master/.github/CODE_OF_CONDUCT.md)** and uphold what is provided thereunto.

## Getting Started

The project is pretty small, and does not require contributors so much to get involved.

- First off, contributor must have a good understanding of how **[Vue](https://vuejs.org/)** and **[Nuxt](https://nuxtjs.org/)** work.
- Basic understanding of unit testing and how it is being implemented in Vue projects using **[Jest](https://jestjs.io/)** and **[Vue Test Utils](https://vue-test-utils.vuejs.org/)**.
- Styling UI components using **[TailwindCSS](https://tailwindcss.com/)**

Please follow along the **[Setup and Dependencies](https://github.com/rhanmiano/the-starred-ph/tree/master#setup-and-dependencies)** to setup the project in your local machine.

That is all! Read the remaining sections of this document to get going.

## How can I contribute?

### Reporting an issue

#### Before anything else

- **Scan the list of [issues](https://github.com/rhanmiano/the-starred-ph/issues)** and make sure that there is no same issue as what you'll be reporting.
- **For general questions**, please do not post it as issue of the project. The maintainer will be providing a channel for questions to be answered accordingly.

#### If confirmed issue

- **Do check the provided [template](https://github.com/rhanmiano/the-starred-ph/blob/master/.github/templates/ISSUE_TEMPLATE/bug_report.md) for issue(s)** to see what are the needed details for the maintainer to consider your reported item.
- **Submit your issue.**

### Adding a feature

#### Before anything else

- **Make sure that the feature is related to what The Starred PH aims to be.**
  - If updates are to be made to the current top most starred Github repositories context, does the feature not pivoting to anything besides showing the most starred repositories, does it supplement the current behaviour?
  - If it is from new platform(see ideas [here](https://github.com/rhanmiano/the-starred-ph#whats-next)), is the feature essential to promote our Pinoy developers, creatives and such?
- **Do check the provided [template](https://github.com/rhanmiano/the-starred-ph/blob/master/.github/templates/ISSUE_TEMPLATE/feature_request.md) for feature requests** to see what are the needed details for the maintainer to consider your feature in mind.
- **Submit your feature request.**

### Pull requests

**Note** I encourage first timers :beginner: (as I am new to Open Source also) to participate and unleash that inner nerd in you. You can read guides in **[here](https://www.firsttimersonly.com/)** on how to contribute to **[open source](https://opensource.guide/)** projects.

- After making sure that all has been read, **fork** this repo.
- Clone your forked repo in to your local machine. <br />
  `git clone your-forked-repo-in-here`
- The `develop` branch will be our starting point, to avoid breaking what's in the `master` <br />
  `git fetch && git checkout develop`
- This will allow us to connect to the original remote repository. <br />
  `git remote add upstream https://github.com/rhanmiano/the-starred-ph.git`
- To fetch upstream branches. <br />
  `git fetch upstream`
- To allow us to pull updates from the original remote **develop** branch. <br />
  `git branch --set-upstream-to=upstream/develop develop`
- Checkout to your branch. Prefix it with `feature/` or `fix/`, whatever is applicable to your updates.
  `git checkout -b ${prefix}/descriptive-branch-name-here`
- Code and push your changes.
- Submit a **pull request**. Please do follow the [template](https://github.com/rhanmiano/the-starred-ph/blob/master/.github/templates/PULL_REQUEST_TEMPLATE.md) for requesting one.

**Any contributions such as UI/UX enhancements, or enhancements in some of the documentations are very much welcome!**

**Let us make this a wonderful experience to us all. Thanks!**
