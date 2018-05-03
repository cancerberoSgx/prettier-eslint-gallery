## 0.0.2

 * npm test do this ----> shell script or js that generate all outputs with a single command
 * tool --list-styles // list all supported styles
 * tool --help
 * david
 * travis

## 0.0.3

 * gallery initial contrib
 * gallery diff
 * prettier-eslint home made implementation because of prettier-eslint issue  https://github.com/prettier/prettier-eslint/issues/149
 * default-es5 mode to preserve valid es5 input (disable es6 eslint rules)

## 0.0.4

 * npm install -g

## 0.0.5

 * test node API doc in readme
 * --build-gallery so users can build the gallery from their project's input files to see how they will look like in popular eslint-configs

## 0.0.6

 * fixed nodejs API (only for input strings)
 * ore specs

## 0.0.7

 * basic tool .d.ts typescript definitions

## 0.0.8, 0.0.9

 * fix requires to work as dependency

## 0.1.0

 * input globs, output or re-write support

## 0.1.1

 * custom eslintrc as --style
 * cli api spec

## 0.1.2

 * eslint path issue fix when used from third party project

## 0.1.3

 * dependencies updated

## 0.1.4

 * CLI --mode not required 
 * debug which file has syntax error when glob
 * fix eslint last apply - now use eslint CLIEngine and solve errors

# 0.1.5
 * fix issue in which es5 mode override all user rules :(
   better return, minimal apidocs, and document what happen on errors
   terrible very basic issue: when no errors we were ruining the input file when overriding it. 

# 0.1.6