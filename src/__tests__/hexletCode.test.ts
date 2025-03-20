import { expect, test } from 'vitest'
import { HexletCode } from '../hexletCode.ts'

const template = { name: 'rob', job: 'hexlet', gender: 'm' }

test('simple forms', () => {
  expect(HexletCode.formFor(template, { url: '/users' }, (f) => {})).toBe(
    '<form action="/users" method="post"></form>',
  )
})

test('form with all attributes', () => {
  expect(
    HexletCode.formFor(template, { method: 'post' }, (f) => {
      f.input('name')
      f.input('job')
      f.submit()
    }),
  ).toBe(
    `<form action="#" method="post"><label for="name">Name</label><input name="name" type="text" value="rob"><label for="job">Job</label><textarea cols="20" rows="40" name="job" as="textarea">hexlet</textarea><input type="submit" value="Save"></form>`,
  )
})
