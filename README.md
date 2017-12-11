# Gaspard-collection

> Manipulate collection of DOM elements

[![Gaspard-collection size](https://badges.herokuapp.com/size/npm/gaspard-collection/dist/gaspard-collection.umd.js?gzip=true)](https://www.npmjs.com/package/gaspard-collection)
[![Build Status](https://travis-ci.org/lucaperret/gaspard-collection.svg?branch=master)](https://travis-ci.org/lucaperret/gaspard-collection)
[![Coverage Status](https://coveralls.io/repos/github/lucaperret/gaspard-collection/badge.svg?branch=master)](https://coveralls.io/github/lucaperret/gaspard-collection?branch=master)

[![npm version](https://badge.fury.io/js/gaspard-collection.svg)](https://badge.fury.io/js/gaspard-collection)
[![devDependency Status](https://david-dm.org/lucaperret/gaspard-collection/dev-status.svg)](https://david-dm.org/lucaperret/gaspard-collection.svg#info=devDependencies)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

:fire: Use gaspard's [Collection](https://github.com/lucaperret/gaspard-collection/blob/master/docs/API.md#srccollectionjs) to queries elements and perform actions on each :fire:


## Getting started

### Installing

npm | yarn | bower | jsDelivr
------------ | ------------- | ------------- | -------------
npm install gaspard-collection | yarn add gaspard-collection | bower install gaspard-collection |  [gaspard-collection.umd.js](https://cdn.jsdelivr.net/npm/gaspard-collection@latest/dist/gaspard-collection.umd.js)

### Usage

Include gaspard-collection on your project
```javascript
// Via ES2015 import statement
import GaspardCollection from 'gaspard-collection'

// or via Commonjs
const GaspardCollection = require('gaspard-collection')
```

```javascript
const collection = new GaspardCollection('div.highlight')
collection
  .css('background-color', 'green')
  .find('p:first-child') // returns a new gaspard collection
  .addClass('introduction')
  .fadeIn(400)
  .elements // Array of matched elements
  .forEach(element => {
    console.log('div.highlight first paragraph', element)
  })
```

Or use gaspard-collection within a `<script>`
```html
<script src="https://cdn.jsdelivr.net/npm/gaspard@latest/dist/gaspard.umd.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gaspard-collection@latest/dist/gaspard-collection.umd.js"></script>
<script>
const collection = new GaspardCollection('div.highlight')
collection
  .css('background-color', 'green')
</script>
```


### API documentation

- [![Latest Documentation](https://doxdox.org/images/badge-flat.svg)](https://doxdox.org/lucaperret/gaspard-collection)

- [Markdown](https://github.com/lucaperret/gaspard-collection/blob/master/docs/API.md)


## Contribute


- Fork the repository
- Clone it locally and install dependencies with npm (or yarn)
  ```shell
  npm install
  ```
- Create a new branch
- Develop your feature/fix with tests running
  ```shell
  npm run test:watch
  ```
- Commit, Push your branch and make a pull request on gaspard repository


## Licensing

MIT License Copyright (c) 2017 Luca Perret
