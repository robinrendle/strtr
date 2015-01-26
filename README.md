# strtr

### A simple, no-frills front-end boilerplate.

At the beginning of each project I tend to open up the previous codebase, copying and pasting bits of code as I go. This feels haphazard to say the least, so the aim of this project is to optimize, optimize, optimize! I want to spend more of my time building a website rather than dealing with the tedious interlinking of dependencies that I commonly have to work with. So please note that this boilerplate is not designed to be used in production, it’s merely a collection of methods for getting into a coding environment as quickly as possible.

This repo contains the following: 

- An `index.html` file with best practices for writing clean, semantic markup.
- A series of helpful Gulp tasks.
- And finally a `_reset.scss` file which is imported into `project.scss`.

For this [Barebones](https://github.com/paulrobertlloyd/barebones)-esque project I’m hoping to stick away from Compass as ideally this should give the developer the autonomy to pick which Sass/JS framework or CMS/templating system they’ll need for a particular project. This is very likely to change in the future however (hello jspm)


## Workflow

Throughout the last dozen or so projects I’ve worked on, the underlying front-end has been relatively simple. The `./src` directory contains all of the images, Sass and JavaScript files whilst a suite of Gulp tasks are set to minimize, concatenate and move these files into `./build`.

Here’s how to get this thing up and running:

1. Clone the repo.
2. Run `npm install` to fetch the dependencies.
3. `npm start` will compile Sass.
4. `live-server` automatically updates the browser with any changes – [install that with npm](https://www.npmjs.com/package/live-server).
5. `npm run-script build` will run a series of Gulp tasks to minify the CSS and to optimize images.


## General thoughts

- Starting a new project should be fun and lightning fast. I want to start building as soon as I get a neat idea but I don’t want a lot of useless files bundled with something like a framework.
- I shouldn’t have to copy + paste code from previous projects because it’s remarkably inefficient.
- The initial codebase ought to be very malleable and flexible.
- Like all boilerplates, this project needs to be simple so I can easily throw things on top of it.
- Particular styles for writing CSS change a lot over time (SMACSS, BEM, SUIT, etc.) hence this boilerplate is agnostic in that regard, letting the individual project dictate which method is best.
- At the moment I’m keeping jspm config files out of this repo since some projects don’t really need fancy pants ES6, Tracuer and JS modules.

## Thanks to

- [HTML5B](https://html5boilerplate.com/)
- [Barebones](https://github.com/paulrobertlloyd/barebones)

