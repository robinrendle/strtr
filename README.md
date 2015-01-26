# strtr: a simple, no-frills front-end boilerplate

At the beginning of each project I tend to open up the previous codebase, copying and pasting bits of code as I go. This feels haphazard to say the least, so the aim of this project is to optimize this process: I want to spend every minute building a website rather than dealing with the tedious interlinking of dependencies that I commonly have to work with. Please note that this boilerplate is not designed to be used in production, it’s merely a collection of methods for getting into a coding environment as quickly as possible.

This repo contains the following: 

- An `index.html` file with best practices for writing clean, semantic markup.
- A series of Gulp tasks to compile Sass and minify CSS.
- Plain Sass (with no frameworks or extensions like Compass.)
- No CMS or Jekyll-inspired service here: those sorts of tools are always needed on a project-by-project basis.
- JSPM.io for writing JS with ES6.


## My current workflow

- Run `npm install` to fetch the dependencies.
- Then run `npm start` to compile Sass.
- [`live-server`](https://www.npmjs.com/package/live-server) will automatically update the browser with any changes.
- By default styles are not minified but they can be optionally if you run `npm run-script minify`.

- Everything gets compiled into the `./build` dir so that I know it’s been compiled and minified.


## General thoughts

- Starting a new project should be fun and lightning fast. I want to start building as soon as I get a neat idea.
- I shouldn’t have to copy + paste code from previous projects because it’s inefficient.
- The initial codebase ought to be very malleable and flexible.
- Like all boilerplates, this project needs to be simple so I can easily throw things on top of it.
- Particular styles of writing CSS changes a lot over time (SMACSS, BEM, SUIT, etc.) hence this boilerplate takes neither approach, letting the individual project dictate which method is best.

## Thanks to

- [HTML5B](https://html5boilerplate.com/)
- [Barebones](https://github.com/paulrobertlloyd/barebones)

