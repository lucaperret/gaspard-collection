jest.mock('gaspard')
import GaspardCollection from 'src/'
import * as gaspard from 'gaspard'

/**
 * @jest-environment jsdom
 */
describe('GaspardCollection', () => {
  let elements = []
  let collection
  const commonClass = 'commonClass'
  beforeEach(() => {
    [
      ['span'],
      ['div']
    ].forEach(([tag, className]) => {
      const element = document.createElement(tag)
      element.className += commonClass
      document.body.appendChild(element)
      elements.push(element)
    })
    collection = new GaspardCollection(elements)
  })
  afterEach(() => {
    elements = []
    collection = null
    document.body.innerHTML = ''
  })
  describe('Initialisation', () => {
    test('Array of elements', () => {
      expect(collection).toBeInstanceOf(GaspardCollection)
      expect(collection.elements).toBeInstanceOf(Array)
      expect(collection.elements.length).toBe(elements.length)
    })
    test('An element', () => {
      const collection = new GaspardCollection(elements[0])
      expect(collection.elements.length).toBe(1)
    })
    test('Class name', () => {
      gaspard.find.mockImplementation(() => elements)
      const collection = new GaspardCollection('.' + commonClass)
      expect(collection.elements.length).toBe(elements.length)
      gaspard.find.mockRestore()
    })
  })
  test('Execute method', () => {
    const method = jest.fn()
    const myParam2 = 2
    collection.each(method, 'myParam1', myParam2)
    expect(method).toHaveBeenCalledTimes(2)
    expect(method).toHaveBeenLastCalledWith(elements[1], 'myParam1', myParam2)
  })
  describe('Find', () => {
    const find = jest.spyOn(gaspard, 'find')
    test('Existing', () => {
      gaspard.find.mockImplementation(() => elements[1])
      collection.elements[0].appendChild(document.createElement('p'))
      const newCollection = collection.find('.commonClass p')
      expect(find).toHaveBeenLastCalledWith('.commonClass p', elements[1])
      expect(newCollection).toBeInstanceOf(GaspardCollection)
      expect(newCollection.elements.length).toBe(1)
      gaspard.find.mockRestore()
    })
    test('Existing element', () => {
      const paragraph = document.createElement('p')
      const newCollection = collection.find(paragraph)
      expect(newCollection).toBeInstanceOf(GaspardCollection)
      expect(newCollection.elements.length).toBe(1)
    })
    test('Unexisting', () => {
      gaspard.find.mockImplementation(() => [])
      const newCollection = collection.find('#testId')
      expect(newCollection.elements.length).toBe(0)
      gaspard.find.mockRestore()
    })
    test('Already exist child', () => {
      gaspard.find.mockImplementation(() => elements[0].children)
      collection.elements[0].appendChild(document.createElement('p'))
      const newCollection = new GaspardCollection([elements[0], elements[0].children[0].parentNode])
      expect(newCollection.find('p').elements.length).toBe(1)
      gaspard.find.mockRestore()
    })
  })
  test('Add class', () => {
    const addClass = jest.spyOn(gaspard, 'addClass')
    collection.addClass('myClass')
    expect(addClass).toHaveBeenLastCalledWith(elements[1], 'myClass')
  })
  test('Remove class', () => {
    const removeClass = jest.spyOn(gaspard, 'removeClass')
    collection.each(element => {
      element.className += 'customClass'
    })
    collection.removeClass('myClass')
    expect(removeClass).toHaveBeenLastCalledWith(elements[1], 'myClass')
  })
  test('Toggle class', () => {
    const toggleClass = jest.spyOn(gaspard, 'toggleClass')
    collection.toggleClass('myClass2')
    expect(toggleClass).toHaveBeenLastCalledWith(elements[1], 'myClass2', undefined)
    collection.toggleClass('myClass2', true)
    expect(toggleClass).toHaveBeenLastCalledWith(elements[1], 'myClass2', true)
  })
  test('Attribute', () => {
    const attr = jest.spyOn(gaspard, 'attr')
    collection.attr('myAttr')
    expect(attr).toHaveBeenLastCalledWith(elements[1], 'myAttr', undefined)
    collection.attr('myAttr', true)
    expect(attr).toHaveBeenLastCalledWith(elements[1], 'myAttr', true)
  })
  test('CSS', () => {
    const css = jest.spyOn(gaspard, 'css')
    collection.css('color', 'red')
    expect(css).toHaveBeenLastCalledWith(elements[1], 'color', 'red')
  })
  test('Before', () => {
    const before = jest.spyOn(gaspard, 'before')
    collection.before('<img />')
    expect(before).toHaveBeenLastCalledWith(elements[1], '<img />')
  })
  test('After', () => {
    const after = jest.spyOn(gaspard, 'after')
    collection.after('<img />')
    expect(after).toHaveBeenLastCalledWith(elements[1], '<img />')
  })
  test('Prepend', () => {
    const prepend = jest.spyOn(gaspard, 'prepend')
    const img = document.createElement('img')
    collection.prepend(img)
    expect(prepend).toHaveBeenLastCalledWith(elements[1], img)
  })
  test('Append', () => {
    const append = jest.spyOn(gaspard, 'append')
    const img = document.createElement('img')
    collection.append(img)
    expect(append).toHaveBeenLastCalledWith(elements[1], img)
  })
  test('Remove', () => {
    const remove = jest.spyOn(gaspard, 'remove')
    collection.remove()
    expect(remove).toHaveBeenLastCalledWith(elements[1])
  })
  test('Text', () => {
    const text = jest.spyOn(gaspard, 'text')
    collection.text('textTest')
    expect(text).toHaveBeenLastCalledWith(elements[1], 'textTest')
  })
  test('Html', () => {
    const html = jest.spyOn(gaspard, 'html')
    collection.html('htmlTest')
    expect(html).toHaveBeenLastCalledWith(elements[1], 'htmlTest')
  })
  test('Replace with', () => {
    const replaceWith = jest.spyOn(gaspard, 'replaceWith')
    collection.replaceWith('<img />')
    expect(replaceWith).toHaveBeenLastCalledWith(elements[1], '<img />')
  })
  test('Fade in', () => {
    const fadeIn = jest.spyOn(gaspard, 'fadeIn')
    collection.fadeIn(200)
    expect(fadeIn).toHaveBeenLastCalledWith(elements[1], 200)
  })
  test('Fade out', () => {
    const fadeOut = jest.spyOn(gaspard, 'fadeOut')
    collection.fadeOut(200)
    expect(fadeOut).toHaveBeenLastCalledWith(elements[1], 200)
  })
  test('Show', () => {
    const show = jest.spyOn(gaspard, 'show')
    collection.show()
    expect(show).toHaveBeenLastCalledWith(elements[1])
  })
  test('Hide', () => {
    const hide = jest.spyOn(gaspard, 'hide')
    collection.hide()
    expect(hide).toHaveBeenLastCalledWith(elements[1])
  })
  test('On', () => {
    const on = jest.spyOn(gaspard, 'on')
    const handler = jest.fn()
    collection.on('click', handler)
    expect(on).toHaveBeenLastCalledWith(elements[1], 'click', handler)
  })
  test('Off', () => {
    const off = jest.spyOn(gaspard, 'off')
    const handler = jest.fn()
    collection.off('click', handler)
    expect(off).toHaveBeenLastCalledWith(elements[1], 'click', handler)
  })
  test('Trigger', () => {
    const trigger = jest.spyOn(gaspard, 'trigger')
    const data = {}
    collection.trigger('click', data)
    expect(trigger).toHaveBeenLastCalledWith(elements[1], 'click', data)
  })
})
