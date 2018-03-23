# [gaspard-collection](https://github.com/lucaperret/gaspard-collection) *0.1.1*

> Manipulate collection of DOM elements


### src/index.js


#### new GaspardCollection([elements&#x3D;]) 

Use GaspardCollection class to perform actions on Elements




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| elements&#x3D; | `Array.<Element>` `Element` `string`  | DOM Elements, Element, or string to query the DOM | *Optional* |




##### Examples

```javascript
import GaspardCollection from 'gaspard-collection'
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


##### Returns


- `GaspardCollection`  GaspardCollection containing elements



#### GaspardCollection.each(method, params) 

Apply a method on each elements and returns the collection to chain methods




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| method | `Function`  | Accept a method to run on each elements | &nbsp; |
| params | `any`  | A list of argument to call the method with | &nbsp; |




##### Returns


- `GaspardCollection`  GaspardCollection containing elements



#### GaspardCollection.addClass(classNames) 

Add classes to each elements




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| classNames | `string`  |  | &nbsp; |




##### Returns


- `GaspardCollection`  GaspardCollection containing elements



#### GaspardCollection.toggleClass(classNames, state) 

Toggle classes to each elements




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| classNames | `string`  |  | &nbsp; |
| state | `boolean`  |  | &nbsp; |




##### Returns


- `GaspardCollection`  GaspardCollection containing elements



#### GaspardCollection.removeClass(classNames) 

Remove classes to each elements




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| classNames | `string`  |  | &nbsp; |




##### Returns


- `GaspardCollection`  GaspardCollection containing elements



#### GaspardCollection.attr(attribute, value) 

Set attribute to each elements




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| attribute | `string`  |  | &nbsp; |
| value | `any`  |  | &nbsp; |




##### Returns


- `GaspardCollection`  GaspardCollection containing elements



#### GaspardCollection.css(ruleName, value) 

Set CSS value to each elements




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| ruleName | `string`  |  | &nbsp; |
| value | `string`  |  | &nbsp; |




##### Returns


- `GaspardCollection`  GaspardCollection containing elements



#### GaspardCollection.before(htmlString) 

Insert content before each elements




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| htmlString | `string`  |  | &nbsp; |




##### Returns


- `GaspardCollection`  GaspardCollection containing elements



#### GaspardCollection.after(htmlString) 

Insert content after each elements




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| htmlString | `string`  |  | &nbsp; |




##### Returns


- `GaspardCollection`  GaspardCollection containing elements



#### GaspardCollection.prepend(element) 

Prepend element to each elements




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| element | `Element`  |  | &nbsp; |




##### Returns


- `GaspardCollection`  GaspardCollection containing elements



#### GaspardCollection.append(element) 

Append element to each elements




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| element | `Element`  |  | &nbsp; |




##### Returns


- `GaspardCollection`  GaspardCollection containing elements



#### GaspardCollection.remove() 

Remove each elements






##### Returns


- `GaspardCollection`  GaspardCollection containing elements



#### GaspardCollection.text(textString) 

Set text to each elements




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| textString | `string`  |  | &nbsp; |




##### Returns


- `GaspardCollection`  GaspardCollection containing elements



#### GaspardCollection.html(htmlString) 

Set html to each elements




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| htmlString | `string`  |  | &nbsp; |




##### Returns


- `GaspardCollection`  GaspardCollection containing elements



#### GaspardCollection.replaceWith(htmlString) 

Replace each elements




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| htmlString | `string`  |  | &nbsp; |




##### Returns


- `GaspardCollection`  GaspardCollection containing elements



#### GaspardCollection.fadeIn(duration) 

Fade in each elements




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| duration | `number`  |  | &nbsp; |




##### Returns


- `GaspardCollection`  GaspardCollection containing elements



#### GaspardCollection.fadeOut(duration) 

Fade out each elements




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| duration | `number`  |  | &nbsp; |




##### Returns


- `GaspardCollection`  GaspardCollection containing elements



#### GaspardCollection.hide() 

Hide each elements






##### Returns


- `GaspardCollection`  GaspardCollection containing elements



#### GaspardCollection.show() 

Show each elements






##### Returns


- `GaspardCollection`  GaspardCollection containing elements



#### GaspardCollection.on(eventName, eventHandler) 

Attach an event handler function for each elements




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| eventName | `string`  |  | &nbsp; |
| eventHandler | `Function`  |  | &nbsp; |




##### Returns


- `GaspardCollection`  GaspardCollection containing elements



#### GaspardCollection.off(eventName, eventHandler) 

Remove an event handler function for each elements




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| eventName | `string`  |  | &nbsp; |
| eventHandler | `Function`  |  | &nbsp; |




##### Returns


- `GaspardCollection`  GaspardCollection containing elements



#### GaspardCollection.trigger(eventName, data) 

Execute all handlers to each elements




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| eventName | `string`  |  | &nbsp; |
| data | `Object`  |  | &nbsp; |




##### Returns


- `GaspardCollection`  GaspardCollection containing elements



#### GaspardCollection.find(selectorOrElement) 

Returns a collection of matched elements either found in the DOM based on passed argument




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| selectorOrElement | `string` `Element`  | Accepts a string containing a CSS selector which is then used to match a set of elements, or an Element | &nbsp; |




##### Returns


- `GaspardCollection`  GaspardCollection containing elements




*Documentation generated with [doxdox](https://github.com/neogeek/doxdox).*
