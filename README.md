# devRes Theme

[![CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-orange.svg)](http://creativecommons.org/licenses/by/4.0/) [![GitHub release (latest by date)](https://img.shields.io/github/v/release/nirgn975/devRes)](https://github.com/nirgn975/devRes/releases) ![Continuous Deployment](https://github.com/nirgn975/devRes/workflows/Continuous%20Deployment/badge.svg?branch=main) [![Hugo](https://img.shields.io/badge/Hugo-%5E0.41.0-ff4088?logo=hugo)](https://gohugo.io/) [![Donate](https://img.shields.io/badge/PayPal-Donate-lightgrey.svg)](https://www.paypal.me/nirgn/2)

> A Hugo resume theme with a Developer focus in mind.

![Screenshot](images/screenshot.webp)

# Getting started

If you want to use the theme in your own [hugo](https://gohugo.io) website just `clone` the repo to your `theme` directory and add it to your `config.toml` file.

```toml
theme = "devRes"
```

# Features

- Responsive layout.
- Light / Dark mode.
- Generate GitHub project cards automatically from a repo name.
- Automagically get the latest posts from your blog.
- Use [Font Awesome](https://fontawesome.com) or [Devicons](https://devicon.dev) icons.
- Support [Google Analytics](https://analytics.google.com/analytics) and [Plausible](https://plausible.io) analytics.
- Optimized for performance: 86/100 on mobile and 99/100 on desktop in [Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights).
- **CDN** for all third-party libraries supported

# Customization

1. You can change the theme colors in the `config.toml` file.
2. Your resume data should be added in the `data/content.yaml` file.

You can check the `exampleSite` directory for an example.

# Want to help?

Great! All issues and pull requests are welcome.

For local development just copy all the files to the `exampleSite` directory, navigate to it and just start [hugo](https://gohugo.io) with

```bash
$ hugo server --source=exampleSite -v --gc
```
