[Gallery Demo](https://cancerberosgx.github.io/prettier-eslint-gallery/gallery/)

[Project Home](https://github.com/cancerberoSgx/prettier-eslint-gallery)

# What's this?

 * Gallery of popular eslint configurations for JavaScript styles
 * Research how well current formatting tools so the job
 * Research euristics to do better job

# Why?

 * Because I want to see how my code will look like when formatted to pooplular styles
 * Because there are current formatting tools don't do a perfect work and we want to see how well they work and if we can improve it
 * Because when choosing a style is not only important to know the rules but also to see how our code will look like !
 * Because I want an easy to use command line tool to format code to popular styles that work as perfect as possible

# Objectives

 * have tools that let users format their code using popular eslint like standard, airbnb, uber, etc. ideally online
 * have a cmd formatter tool that formats to popular eslints

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

<!-- # how to know if it really works?

```sh
node node_modules/eslint/bin/eslint.js -c  eslint-config/google/.eslintrc.js  assets/input/sccollection.js 

# you will see lots of errors

node node_modules/eslint/bin/eslint.js -c  eslint-config/google/.eslintrc.js  assets/output/sccollection-google.js

# you will see lots less errors

``` -->

# Nice to have

 * acept custom eslint - like for security - performance... 

# issues / TODOS

 * tool --list-styles // list all supported styles
 * probably we will need to rename this project to someting more generic if we decide to use other tools besides prettier
 * npm install -g - test it !
 * test node api doc in readme
 
 * --input to accept globs

 * add a static html that shows inputs and linkts to each output style

 * make a tool to check each of the stylesif they really work - check abobe. count errors before an after and report. 

 * shell script or js that generate all outputs with a single command

 * we are installing all the eslint plugins in the same project - but i notice that standard and airbnb require particular versions of plugins and they could be incompatible... try to separate individual projects in

  * https://github.com/gulpjs/eslint-config-gulp
  * https://github.com/sindresorhus/eslint-config-xo
  * https://github.com/dustinspecker/awesome-eslint
  * https://github.com/walmartlabs/eslint-config-defaults
  * https://github.com/FormidableLabs/eslint-config-formidable


  then there are other that has nothing to do with style but with performance , security - should investigate: 
  https://www.npmjs.com/search?q=eslint-c&page=1&ranking=popularity