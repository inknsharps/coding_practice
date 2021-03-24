# Inquirer Practice Part 2

Some key takeaways from this practice:
* `.prompt()` in inquirer returns a promise, which is why the `.then()` and `.catch()` methods are used.
* Because `.prompt()` returns a promise, you can apply async/await to really trim down the code.
* The question object basically determines how the prompts behave, so remember to include the ones you need for best functionality: [Documentation](https://www.npmjs.com/package/inquirer#objects)
    * For exmaple, if you want to check for a specific answer, make sure to include `validate` and use a function to check for any specific thing. In the example I put a basic "if there is nothing inputted, end the process" function (fun note about `validate`- you need to `return true` at the end of it, otherwise it will get stuck there).
* `process.exit(integer)` is a way to abort the current process. In terms of the integer, `0` is a successful exit, while `1` is failed exit.