[![Build Status](https://travis-ci.org/cancerberoSgx/prettier-eslint-gallery.png?branch=master)](https://travis-ci.org/cancerberoSgx/prettier-eslint-gallery)
[![Dependencies](https://david-dm.org/cancerberosgx/prettier-eslint-gallery.svg)](https://david-dm.org/cancerberosgx/prettier-eslint-gallery)


# [Gallery Demo](https://cancerberosgx.github.io/prettier-eslint-gallery/gallery/)

[Gallery Demo](https://cancerberosgx.github.io/prettier-eslint-gallery/gallery/)


[Project Home](https://github.com/cancerberoSgx/prettier-eslint-gallery)

# What's this?

 * JavaScript code formatting tool that support popular style guides. Command line and node.js API
 * Gallery of popular eslint configurations for JavaScript styles so I can see how they look like and make a choice
 * Easy/Automatic gallery generation from user's custom JavaScript input files (so they can see how their files will look like and vote!)

# Why?

 * Because I want to see how my code will look like when formatted to popular styles
 * Because there are current formatting tools don't do a perfect work and we want to see how well they work and if we can improve it
 * Because when choosing a style is not only important to know the rules but also to see how our code will look like !
 * Because I want an easy to use command line tool to format code to popular styles that work as perfect as possible

# Is this safe - ready to use ?

Yes! This project is not touching the code - it delegates all formatting to the very mature tools: eslint and prettier

# Install & using in command line

You can install the tool globally:

```sh
 $ npm install -g prettier-eslint-gallery
 $ prettier-eslint-gallery --style standard --mode default --input src/one.js --output formatted.js
```

Or locally:

```sh
 $ npm install --save-dev prettier-eslint-gallery
 $ node node_modules/prettier-eslint-gallery/src --style standard --input src/one.js --output formatted.js
```

# nodejs API

```javascript
  const formatter = require('prettier-eslint-gallery')
  let config = {
      source: `var arr = [1,2,3].map(function(a){return a+1})`,
      style: 'walmart',
  }
  let result = formatter(config)
```

Then `result` will be the formatted code using the `walmart` style guide, something like this: 

```javascript
const arr = [1, 2, 3].map(a => {
  if (a > 1) {
    return a + 1;
  } else {
    return a + 10;
  }
});
```

# Modes

 * **default**: if first run prettier (inferring prettier config from eslint config) and then eslint --fix
 * **default-es5**: Same as default, but disabling all eslint ecma6 rules. This causes that if you pass an es5 file as input it won't be fixed to use es6 constructions even if eslint config say so. For example, if the eslint-config defines prefer-arrow-callback: 'error' the rule will be disabled so the es5 input source will keep being es5
 * **onlyEslintFix**: not using prettier, just eslint --fix. It still have some issues but we want to compare with 'default' modes to see how well do the work.

# Generate your own gallery

If you want to generate the gallery using your own project's files and input to see how they will look like, just choose some files from your project and put them in folder `my/sample/folderWithJsFiles` and running the following command will generate a working gallery in `gallery-output-folder`. You need to open the folder using a static server since the application perform ajax requests:

```sh
 $ prettier-eslint-gallery --build-gallery --input my/sample/folderWithJsFiles --output gallery-output-folder
 $ static-server gallery-output-folder
 $ firefox  http://localhost:9080/gallery/index.html
```

# Research

 * Research how well current formatting tools so the job
 * Research heuristics to do better job
 * see how well eslint --fix do the job and report issues.

# Useful commands

Run tests and regenerate all output files:
```sh
npm test
```

Generate output and gallery:
```sh
 $ npm test
 $ rm gallery/index.html
 $ node src/gallery-generator/index
 $ static-server .
 $ firefox http://localhost:9080/gallery/index.html
```


# issues / TODO

 * --input to accept globs

 * --replace (replace input file(s))

 * probably we will need to rename this project to something more generic if we decide to use other tools besides prettier

 * test if this works : npm install -g gallery

 * npm publish

 * add a static HTML that shows inputs and links to each output style <--- WIP

 * make a tool to check each of the styles if they really work - check above. count formatting errors before an after and report for all - so we have an idea of how well --fix works and observe how it evolves

 * accept custom eslint - I have my own that extends a popular one - I want to pass it like tool --input --output --style my/.eslintrc.js - user will be responsible of installing dependencies

 * we are installing all the eslint plugins in the same project - but i notice that standard and airbnb require particular versions of plugins and they could be incompatible... try to separate individual projects in

 * https://github.com/felixge/node-style-guide/blob/master/.eslintrc
 * https://github.com/WordPress-Coding-Standards/eslint-config-wordpress/blob/master/index.js
 * https://github.com/jquery/eslint-config-jquery

 * https://github.com/bodil/eslint-config-cleanjs
 * https://github.com/walmartlabs/eslint-config-defaults
 * https://github.com/FormidableLabs/eslint-config-formidable


 * then there are other that has nothing to do with style but with performance , security - should investigate:
  https://www.npmjs.com/search?q=eslint-c&page=1&ranking=popularity - do they work with --fix ?

