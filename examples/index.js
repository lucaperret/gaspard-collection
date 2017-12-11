import Collection from '../'
const collection = new Collection('#app')
collection
  .css('background-color', 'green')
  .find('p:first-child')
  .addClass('introduction')
  .fadeIn()
console.log(collection)
