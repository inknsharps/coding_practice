# Inquirer Practice Part 2

Some key takeaways from this practice:
* `.prompt()` in inquirer returns a promise, which is why the `.then()` and `.catch()` methods are used.
* Because `.prompt()` returns a promise, you can apply async/await to really trim down the code.