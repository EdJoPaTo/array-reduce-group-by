# array-reduce-group-by

[![NPM Version](https://img.shields.io/npm/v/array-reduce-group-by.svg)](https://www.npmjs.com/package/array-reduce-group-by)
[![node](https://img.shields.io/node/v/array-reduce-group-by.svg)](https://www.npmjs.com/package/array-reduce-group-by)

> A group-by function working with the built-in Array.reduce()

## Install

```bash
npm install array-reduce-group-by
```

## Usage

```js
import {arrayReduceGroupBy} from "array-reduce-group-by";

["Alpha", "Beta", "Animal"]
  .reduce(arrayReduceGroupBy((o) => o[0]), {});
//=> {A: ['Alpha', 'Animal'], B: ['Beta']}
```

Make sure not to forget the `{}` in the end!

## API

### arrayReduceGroupBy(keyFunc)

#### keyFunc

Type: `(arrayElement) => string`

Function to determine the key of a given array element
