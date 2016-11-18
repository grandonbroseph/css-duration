# css-duration

> Converts CSS-style durations to milliseconds.

```javascript
var duration = require("css-duration")

duration('1000ms')
// > 1000

duration('1.5s')
// > 1500

duration('30m')
// > 1800000

duration('8h')
// > 28800000

duration('2d')
// > 172800000
```

## Installation

`npm install --save css-duration`

## Usage

### `duration(time)`

Normalizes "unit-based time" (similar to CSS values) into a `Number` of milliseconds.

#### Parameters

 - `time` (`String`): A CSS-style value of a duration of time (i.e. `10s`, `5h`, `0.5d`)

#### Units

 - `ms`: Milliseconds
 - `s`: Seconds
 - `h`: Hours
 - `d`: Days
 - `w`: Weeks

**Note:** Anything past seconds is not a valid CSS unit.  Use another package for validating.

#### Example

```js
duration('0.25d')
// =>
```

## License

[Brandon Semilla](https://github.com/grandonbroseph) © MIT
