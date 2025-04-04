import { expect, test } from 'vitest'
import { Tag } from '../tagGenerator.ts'

test('simple tag generation', () => {
  expect(new Tag('br').toString()).toBe('<br>')
})

test('tags with attributes', () => {
  expect(new Tag('input', { type: 'submit', value: 'Save' }).toString()).toBe(
    `<input type="submit" value="Save">`,
  )
})

test('tags with attributes and no value', () => {
  expect(new Tag('label', { for: 'email' }).toString()).toBe(
    `<label for="email"></label>`,
  )
})

test('tags with attributes and value', () => {
  expect(new Tag('label', { for: 'email' }, 'Email').toString()).toBe(
    `<label for="email">Email</label>`,
  )
})
