<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<h1 align="center">
  Barcadia V2 Starter
</h1>

[Version 2 Release Notes](https://www.morganbaker.dev/journal/barcadia-v2-release-notes)

Barcadia is a GatsbyJS starter theme that uses Contentful for content management. It includes the main configuration files found in Gatsby.

## Getting started

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the Barcadia starter.

    ```shell
    # create a new Gatsby site using the barcadia starter
    gatsby new my-barcadia-starter https://github.com/bagseye/barcadia
    ```

2.  **Before running Gatsby Develop**

    You'll need to setup a free account with Contentful [Here](https://www.contentful.com/) and create a space ID and access token for your new site.

    Once these are generated create a new file in the site root called `.env.development` and populate it with the following information:

    ```
    CONTENTFUL_SPACE_ID={YOUR SPACE ID}
    CONTENTFUL_ACCESS_TOKEN={YOUR ACCESS TOKEN}
    ```

    **NOTE** - Ensure this file has been added to your `.gitignore` to prevent it from being tracked

3.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-barcadia-starter/
    gatsby develop
    ```

4.  **Import Content-model.json on Contentful**
    Make a Json file(e.g. example-config.json) with the following content.

    ```
    {
      "spaceId": "SPACE_ID",
      "managementToken": "Generate a management token from the APIs Tab on contentful dashboard",
      "contentFile": "content-model.json"
     }
    ```

    Important Note: you need contentful globally installed(`npm i -g contentful-cli`) before the next step
    Then Run this Command from your terminal:
    `contentful space import --config example-config.json`

5.  **Open your site**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `my-barcadia-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

6.  **Build your site**

    When you are ready to build your production site, you will need to create a `.env.production` file that will contain the `CONTENTFUL_SPACE_ID` and `CONTENTFUL_ACCESS_TOKEN` environment variables. After that is set up, you can run `npm run build` or `gatsby build` and Gatsby will build your site.

## CMS Content Model

    Follow the steps for importing data with Contentful [Here](https://www.contentful.com/developers/docs/tutorials/cli/import-and-export) using the example file `content-model.json`, found in the site root.

## 🧐 What's inside?

A quick look at the top-level files and directories
.
├── node_modules
├── src
├── .gitignore
├── .prettierignore
├── .prettierrc
├── content-model.json
├── gatsby-config.js
├── gatsby-node.js
├── LICENSE
├── package-lock.json
├── package.json
└── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: Gatsby is licensed under the MIT license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

<!-- AUTO-GENERATED-CONTENT:END -->

#### Photo Credits

[Ales Nesetril](https://unsplash.com/@alesnesetril)
[Josh Rose](https://unsplash.com/@joshsrose)
[Cat Han](https://unsplash.com/@figmentprints)
[Martin Sanchez](https://unsplash.com/@martinsanchez)
[Onur Binay](https://unsplash.com/@onurbinay)
[Torsten Dettlaff](https://www.pexels.com/@tdcat)
[Nick Demou](https://www.pexels.com/@nick-demou-365778)
[Little John](https://unsplash.com/@joao_freire)
