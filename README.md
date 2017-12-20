# ember-simple-sortable

<a href="http://emberobserver.com/addons/ember-simple-sortable"><img src="http://emberobserver.com/badges/ember-simple-sortable.svg"></a> &nbsp; <a href="https://david-dm.org/amk221/ember-simple-sortable#badge-embed"><img src="https://david-dm.org/amk221/ember-simple-sortable.svg"></a> &nbsp; <a href="https://david-dm.org/amk221/ember-simple-sortable#dev-badge-embed"><img src="https://david-dm.org/amk221/ember-simple-sortable/dev-status.svg"></a> &nbsp; <a href="https://codeclimate.com/github/amk221/ember-simple-sortable"><img src="https://codeclimate.com/github/amk221/ember-simple-sortable/badges/gpa.svg" /></a> &nbsp; <a href="http://travis-ci.org/amk221/ember-simple-sortable"><img src="https://travis-ci.org/amk221/ember-simple-sortable.svg?branch=master"></a>

## Demo

https://amk221.github.io/ember-simple-sortable

## Example

See https://github.com/RubaXa/Sortable#options for the available options.

```handlebars
{{#x-sortable options=(hash group="Items" onAdd=(action "doSomething"))}}
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
  <li>Item 4</li>
  <li>Item 5</li>
{{/x-sortable}}
```

## Note

This addon is not used in production, it was just an experiment to test out Sortable.js

### Installation
```
ember install ember-simple-sortable
```
