# num-to-nepali-words

Convert english number(Arabic numerals) into Nepali words. Both in Nepali and English language.

## Example
```
12345       => बाह्र हजार, तीन सय पैँतालीस
6789        => छ हजार, सात सय उनान्नब्बे
12345       => Twelve Thousand, Three Hundred and Forty Five
10000000001 => Ten Arab, One
```

## Usage
```
npm i num-to-nep-words
```

```
const numToNepaliWords = require('num-to-nep-words')

console.log(numToNepaliWords(123, 'np')) // एक सय तेईस
console.log(numToNepaliWords(123, 'en')) // One Hundred and Twenty Three
```

#### In browser
```
<!--  1.0.4 is the version-->
<script src="https://unpkg.com/num-to-nep-words@1.0.4/conversion.js"></script>
```

### Demo

https://github.com/the-value-crew/num-to-nepali-words