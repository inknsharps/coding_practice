# Random Password Generator - Alternate Solution

## Description

This is an alternate solution to the random password generator assignment.

Instead of defining arrays/strings for the character types, a `.fromCharCode` method was used to generate a specific subset of characters from the UTF-16 code units.

This unfortunately does not work so smoothly for symbols because of their varying codes in the UTF-16 table, so these were defined as a single string, then a `.charAt` method was applied along with a typical `Math.floor(Math.random()*value)` to pull a character from that string.

## Credits

Florin Pop's <a href="https://codepen.io/FlorinPop17/pen/BaBePej">Random Password Generator</a> for inspiration on random password generation logic.