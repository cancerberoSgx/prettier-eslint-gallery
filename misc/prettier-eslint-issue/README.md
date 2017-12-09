# what is this?

This tries to demonstrate what it seems to be an issue in prettier-eslint 

I want to format input.js using .airbnb-eslintrc.js

**The input has function callbacks and I expect that my output have arrow function callbacks**


# Commands

In the following: the first command will tun eslint --fix, the second will run prettier-eslint (issue) and the third one will run first prettier and then eslint - separately (works ok)

```sh
rm test/test-out* ;\
node test/run-eslintfix.js ;\
node test/run-prettier-eslint.js > test/test-out-prettier-eslint-debug.txt ;\
node test/run-prettier-eslint-manually.js
```

I'm putting prettier-eslint debug logs in the .txt. There are no errors - configuration is loaded correctly. 


# Results

prettier-eslint is not transforming functions into arrow-functions. 

Are you by any chance ommiting / ignoring prefer-arrow rule ? 