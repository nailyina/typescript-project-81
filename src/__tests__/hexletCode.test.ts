import { expect, test } from 'vitest'
import { HexletCode } from '../hexletCode.ts'

const template = { name: 'rob', job: 'hexlet', gender: 'm' }

test('simple tag generation', () => {
  expect(HexletCode.formFor(template, {}, (f) => {})).toBe(
    '<form action="#" method="post"></form>',
  )
})

test('tags with attributes', () => {
  expect(HexletCode.formFor(template, { url: '/users' }, (f) => {})).toBe(
    '<form action="/users" method="post"></form>',
  )
})
