# strtr

Here’s how to get this thing up and running:

1. Clone the repo.
2. Run `npm install` to fetch the dependencies.
3. `npm start` will compile Sass.
4. `live-server` automatically updates the browser with any changes – [install that with npm](https://www.npmjs.com/package/live-server).
5. `npm run-script build` will run a series of Gulp tasks to minify the CSS and to optimize images.


## General thoughts

Throughout the last dozen or so projects I’ve worked on, the underlying front-end has been relatively simple. The `./src` directory contains all of the images, Sass and JavaScript files whilst a suite of Gulp tasks are set to minimize, concatenate and move these files into `./build`.

- Starting a new project should be fun and lightning fast. I want to start building as soon as I get a neat idea but I don’t want a lot of useless files bundled with something like a framework.
- I shouldn’t have to copy + paste code from previous projects because it’s remarkably inefficient.
- The initial codebase ought to be very malleable and flexible.
- Like all boilerplates, this project needs to be simple so I can easily throw things on top of it.
- Particular styles for writing CSS change a lot over time (SMACSS, BEM, SUIT, etc.) hence this boilerplate is agnostic in that regard, letting the individual project dictate which method is best.
- At the moment I’m keeping jspm config files out of this repo since some projects don’t really need fancy pants ES6, Tracuer and JS modules.
- CSS architecture should be decided on a project by project basis.

## Contributions

If you have any ideas to make strtr better, then just send me a pull request or open an issue.

### Thanks to:

- [HTML5B](https://html5boilerplate.com/)
- [Barebones](https://github.com/paulrobertlloyd/barebones)

