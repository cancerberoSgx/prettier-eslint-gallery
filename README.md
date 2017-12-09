[![Build Status](https://travis-ci.org/cancerberoSgx/prettier-eslint-gallery.png?branch=master)](https://travis-ci.org/cancerberoSgx/prettier-eslint-gallery)
[![Dependencies](https://david-dm.org/cancerberosgx/prettier-eslint-gallery.svg)](https://david-dm.org/cancerberosgx/prettier-eslint-gallery)



[Gallery Demo](https://cancerberosgx.github.io/prettier-eslint-gallery/gallery/)

[Project Home](https://github.com/cancerberoSgx/prettier-eslint-gallery)

# What's this?

 * Gallery of popular eslint configurations for JavaScript styles so I can see how they look like and make a choice 
 * Research how well current formatting tools so the job
 * Research heuristics to do better job

# Why?

 * Because I want to see how my code will look like when formatted to popular styles
 * Because there are current formatting tools don't do a perfect work and we want to see how well they work and if we can improve it
 * Because when choosing a style is not only important to know the rules but also to see how our code will look like !
 * Because I want an easy to use command line tool to format code to popular styles that work as perfect as possible

# Objectives

 * have tools that let users format their code using popular eslint like standard, airbnb, uber, etc. ideally online
 * have a command line tool to format to popular enlist configurations

# Install & using in command line

You can install the tool globally: 

```sh
npm install -g prettier-eslint-gallery
prettier-eslint-gallery --style standard --input src/one.js --output formatted.js
```

Or locally: 

```sh
npm install --save-dev prettier-eslint-gallery
node node_modules/prettier-eslint-gallery/src --style standard --input src/one.js --output formatted.js
```

# nodejs API

```javascript
var formatter = require('prettier-eslint-gallery')
var config = {
  mode: 'normal', 
  input: 'some/file.js',
  output: 'some/output.js',
  style: 'airbnb'
}
formatter(config) // synchronous !
```

# Modes

 * **default**: using prettier-eslint with prettierLast: true
 * **onlyEslintFix**: not using prettier, just eslint --fix. It still have some issues but we want to compare with 'default' modes to see how well do the work. 

# Useful commands

Run tests and regenerate all output files:
```sh
npm test 
```

Generate output and gallery:
```sh
npm test
rm gallery/index.html
node src/gallery-generator/index
static-server .
```


# issues / TODO

 * probably we will need to rename this project to something more generic if we decide to use other tools besides prettier
 * test if this works : npm install -g gallery
 * npm publish
 * test node API doc in readme
 
 * --input to accept globs

 * add a static HTML that shows inputs and links to each output style <--- WIP

 * make a tool to check each of the styles if they really work - check above. count errors before an after and report. 


 * accept custom eslint - like for security - performance... 
 * we are installing all the eslint plugins in the same project - but i notice that standard and airbnb require particular versions of plugins and they could be incompatible... try to separate individual projects in

 * https://github.com/bodil/eslint-config-cleanjs
 * https://github.com/walmartlabs/eslint-config-defaults
 * https://github.com/FormidableLabs/eslint-config-formidable


  then there are other that has nothing to do with style but with performance , security - should investigate: 
  https://www.npmjs.com/search?q=eslint-c&page=1&ranking=popularity


<!-- 
Doubts about prettier-eslint

prettierPath

node node_modules/eslint/bin/eslint.js -c eslint-config/airbnb/.eslintrc.js assets/input/sccollection.js --fix
prettier assets/input/sccollection.js

running eslint and prettier dont mess my arrow functions - in this order or viceversa

but prettier-eslint does !!! why???
 -->


<!-- 

# propaganda: 

after this project is more prepared - we should anounce so users take value - shis i s alist of where we can anounce it: 

https://github.com/eslint/eslint/issues/5858


-->


<!-- # how to know if it really works?

```sh
node node_modules/eslint/bin/eslint.js -c  eslint-config/google/.eslintrc.js  assets/input/sccollection.js 

# you will see lots of errors

node node_modules/eslint/bin/eslint.js -c  eslint-config/google/.eslintrc.js  assets/output/sccollection-google.js

# you will see lots less errors

``` -->
