---
title: First document
---

![Demo background](../../assets/demo-image-3.png)

# Getting Started

---

## About This Starter

This Blueprints starter is the best fit for sites that are text-heavy and don’t require a lot of custom components and functionality. It’s perfect for blogs, simple documentation sites, and other sites that are mostly static content.

We’ve used the following stack to build this starter:

- [Gatsby](https://www.gatsbyjs.org/)
- [Griffel](https://griffel.js.org/)
- [MDX](https://mdxjs.com/)

## Architecture

### Gatsby

Gatsby is a static site generator that uses React and GraphQL to build blazing fast websites. In this starter, Gatsby is used to generate the static HTML pages from the React components and MDX files.

Take a look at the `./pages/` directory. All files in this directory are automatically converted into pages by Gatsby. The `index.tsx` file is the homepage, and the `404.tsx` file is the 404 page, and so on.


### MDX

MDX is a file format that lets you write JSX in your Markdown documents. It’s perfect for writing documentation, blog posts, and other long-form content alongside Blueprints components or your own custom React components.

MDX is configured in the `./gatsby-config.ts` file through `gatsby-plugin-mdx`. You can add additional plugins to the `gatsby-plugin-mdx` options to extend the functionality of MDX. For example, in this starter, we added `gatsby-remark-images` to proccess images.

#### Resources for Gatsby and MDX

- [gatsby-plugin-mdx](https://www.gatsbyjs.com/plugins/gatsby-plugin-mdx/)
- [Adding MDX Pages](https://www.gatsbyjs.com/docs/how-to/routing/mdx/)
- [Working with Images in Markdown & MDX](https://www.gatsbyjs.com/docs/how-to/images-and-media/working-with-images-in-markdown/#inline-images-with-gatsby-remark-images)

### Blueprints

Blueprints is a React component library that provides a set of components that are designed for documentation sites. It’s built on top of [Fluent](https://fluent2.microsoft.design/) and [Griffel](https://griffel.js.org/).

In this starter, Blueprints is used to set up the Shell of the site, and to provide a set of components that are used throughout the pages.
