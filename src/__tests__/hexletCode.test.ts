import { expect, test } from 'vitest'
import { HexletCode } from '../hexletCode.ts'

const template = { name: 'rob', job: 'hexlet', gender: 'm' }

test('simple tag generation', () => {
  expect(
    HexletCode.formFor(template, {}, (f) => {
      f.input('name')
      f.input('job', { as: 'textarea' })
    }),
  ).toBe(
    `<form action="#" method="post"><input name="name" type="text" value="rob"><textarea cols="20" rows="40" name="job" as="textarea">hexlet</textarea></form>`,
  )
})

test('tags with attributes', () => {
  expect(HexletCode.formFor(template, { url: '/users' }, (f) => {})).toBe(
    '<form action="/users" method="post"></form>',
  )
})
