# Rock Paper Scissors Trial Run

This is an attempt I made on the Rock, Paper, Scissors project before the class. If anyone in the future is reading this please don't use this as a model, it's probably not great.

## Features

1. First to 5 RPS game.
2. Displays your's and the computer's scores.
3. Has a game over message and play again to trigger the game loop again.

## The educational things that may be of use for review

### General Javascript Practices

* You have to declare any values you want to change in the code later as a variable.
* Scope is super important when you're trying to declare variables and functions, you cannot access something that is out of scope!
* Don't forget to `break;` out of loops otherwise you might repeat things more than you want to.
* Remember to account for all cases that you might be setting up with your code, try breaking your code with unexpected inputs and see what happens.

### Operators

* `++` can be used in general to increment any number by 1, while `--` decrements any number by 1.

### Window Objects

* `prompt()` displays a message in the browser window, that returns the value entered as a `string`. If cancel is clicked, it returns `null`.
* `alert()` displays a message in the browser window that can be removed by clicking OK. This does *not* return anything.
* `confirm()` displays a message in the browser window that can be removed by clicking OK or cancel. This returns `true` if OK is clicked, and `false` if cancel is clicked.

### Random Number Generation

* `Math.random()` returns a random value between 0 (inclusive),  and 1 (exclusive), meaning that it will always return a value under 1.
    * `Math.floor()` *rounds down* to a number to its nearest integer.
    * Therefore, if we multiply the result of `Math.random()` by a number, we can then use `Math.floor()` to round it up, which means we can get a random number generator with a certain range of numbers.
        * Eg. `Math.floor(Math.random() * 5)` will return a number between 0 and 4 (remember that `Math.random()` will never return 1, so 5 is impossible).

