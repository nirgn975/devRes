# devRes Theme

[![CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-blue.svg)](http://creativecommons.org/licenses/by/4.0/) ![Continuous Integration](https://github.com/nirgn975/devRes/workflows/Continuous%20Integration/badge.svg?branch=main) [![Donate](https://img.shields.io/badge/PayPal-Donate-lightgrey.svg)](https://www.paypal.me/nirgn/2)

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
- [Plausible](https://plausible.io) analytics.

# Customization

1. You can change the theme colors in the `config.toml` file.
2. Your resume data should be added in the `data/content.yaml` file.

You can check the `exampleSite` directory for an example.

# Want to help?

Great! All issues and pull requests are welcome.

For local development just copy all the files to the `exampleSite` directory, navigate to it and just start [hugo](https://gohugo.io) with `hugo server --source=exampleSite -v --gc`.
