# devRes Theme | Hugo

[![CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-orange.svg)](http://creativecommons.org/licenses/by/4.0/) [![GitHub release (latest by date)](https://img.shields.io/github/v/release/nirgn975/devRes)](https://github.com/nirgn975/devRes/releases) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release) ![Continuous Deployment](https://github.com/nirgn975/devRes/workflows/Continuous%20Deployment/badge.svg?branch=main) [![Hugo](https://img.shields.io/badge/Hugo-%5E0.59.0-ff4088?logo=hugo)](https://gohugo.io/) [![Donate](https://img.shields.io/badge/PayPal-Donate-lightgrey.svg)](https://www.paypal.me/nirgn/2)

> A Hugo resume theme with a Developer focus in mind.

![Screenshot](images/screenshot.webp)

## DEMO

To see this theme in action, Here is a [live demo](https://nirgn975.github.io/devRes) site which is rendered with this theme and some content for documentation.

## Features

- Responsive layout.
- Light / Dark mode.
- Generate GitHub project cards automatically from a repo name.
- Automagically get the latest posts from your blog.
- Use [Font Awesome](https://fontawesome.com) or [Devicons](https://devicon.dev) icons.
- Support [Google](https://analytics.google.com/analytics) and [Plausible](https://plausible.io) analytics.
- Optimized for Performance, Accessibility, Best Practices, and SEO: 90+ (out of 100) on mobile and desktop in [Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights).
- **CDN** for all third-party libraries supported.
- Automated contact form with [formspree](https://formspree.io) and [getform](https://getform.io).

## Getting started

If you want to use the theme in your own [hugo](https://gohugo.io) website just `clone` the repo to to your `themes` directory or `add` it as a submodule.

```bash
$ git clone git@github.com:nirgn975/devRes.git themes/devRes
```

or

```bash
$ git submodule add git@github.com:nirgn975/devRes.git themes/devRes
```

And then add it to your `config.toml` file

```toml
theme = "devRes"
```

You can look at the [exampleSite](https://github.com/nirgn975/devRes/tree/main/exampleSite) to check out the `config.tomal` and the `data/content.yaml` for examples.

## Customization

1. You can change the theme colors in the `config.toml` file.
2. Your resume data should be added in the `data/content.yaml` file.
3. Your favicons should go in an `icons` directory inside `static`. You can easily generate them with [realfavicongenerator](https://realfavicongenerator.net), and set theme-color and background-color in `browserconfig.xml` and `site.webmanifest`.

You can check the `exampleSite` directory for an example.

## Want to help?

Great! All issues and pull requests are welcome.

For local development just start [hugo](https://gohugo.io) with `exampleSite` as the source.

```bash
$ hugo server --source=exampleSite -v --gc
```
