# Objectives

 * have tools that let users format their code using popular eslint like standard, airbnb, uber, etc. ideally online
 * have a cmd formatter tool that formats to popular eslints

# Using

```sh
node .  --input assets/input/sccollection.js --style google --output assets/output/sccollection-google.js 
```

# how to know if it really works?

```sh
node node_modules/eslint/bin/eslint.js -c  eslint-config/google/.eslintrc.js  assets/input/sccollection.js 

# you will see lots of errors

node node_modules/eslint/bin/eslint.js -c  eslint-config/google/.eslintrc.js  assets/output/sccollection-google.js

# you will see lots less errors

```

# Nice to have

 * acept custom eslint - like for security - performance... 

# issues / TODOS

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