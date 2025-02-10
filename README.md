# Project: Restaurant Page - [Javascript Page](https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page)

Odin Projects Node Path project Dynamically rendering a restaurant page.

> [!NOTE] - DOM Elements should be created with JavaScript but styling cna be in a separate CSS file.

## Assignment

1. Start the project as a webpack project creating a `package.json` and setting up WebPack.

2. Create a `.gitignore` file in the root of the project containing `node_modules` and `dist`

3. Set up an HTML skeleton inside `src/template.html`. Add a `<header>` element that contains a `<nav>` element with `<button>`s for different "tabs". (for example "Home", "Menu" or "About"). Below the `<header>` add a single `<div id="content">`.

4. Add an `console.log()` inside of `src/index.js` and then run `npx webpack serve`. Verify that Javascript is running by opening http:localhost:8080

5. Inside `div#content` create a home page for the restaurant. Include an image, headline and some copy. Its ok to hard code it to make sure it is layed out correctly.

6. Now remove everything inside of`div#content` from the HTML so there is still a `<header>` a `<nav>` with an empty `<div id="content">` below it and instead create them by JavaScript only by appending each element to `div#content` once the page is first loaded. Write this initial page load function inside its own module and then import can call it inside of `index.js`.

7. Next set up your restaurant site to use tabbed browsing to access the `Menu` and `contact` pages. Look at the behavior of [student's live preview](https://web.archive.org/web/20221024060550/https://eckben.github.io/bearysBreakfastBar/) for visual inspection.

   1. Put the contents of each "tab" inside its own module. Each module will export a funciton that creates a div element, adds the appropriate content and styles to the element and then appens it to the DOM.

   2. Write the tab swotching logic indside of `index.js`. Should have event listeners for each button in the header navbar that wipes our the current contents of `div#content` and then runs the correct 'tab module' to populate it with the new contents again.

## Deployment

Deploy your project to GitHub pages. This is a little more work because GitHub pages looks for
and `index.html` _in the root of your project_ but it is now in `dist`. Need to do a few steps to push _the contents_ of your `dist` folder to its own branch in Github which will then have a root level `index.html` for GitHub pages to serve.

1. make a new branch to deploy from by running `git branch gh-pages`

2. Make sure all work is committed.

3. Run `git checkout gh-pages && git merge main --no-edit` to change branches and sync your changes from `main` so that you are ready to deploy.

4. Bundle the applicatin to `dist` with the build command. For now that's `npx webpack`

5. Run these in order:

```bash
git add dist -f && git commit -m "Deployment commit"
git subtree push --prefix dist origin gh-pages
git checkout main
```

6. The **source branch** for Github pages is set in your repository's settings. Get this changes to the `gh-pages` branch.
