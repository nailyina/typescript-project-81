import { TagAttribute } from './types'

import { Tag } from './tagGenerator'
export class HexletCode {
  static formFor(
    template: Record<string, string>,
    options: TagAttribute,
    callback: (f: FormBuilder) => void,
  ): string {
    const action = options.url ?? '#'
    const formBuilder = new FormBuilder(template)
    callback(formBuilder)
    const formTag = new Tag(
      'form',
      { action: action, method: 'post' },
      formBuilder.toString(),
    )
    return formTag.toString()
  }
}

class FormBuilder {
  private template: Record<string, string>
  private fields: string[] = []

  constructor(template: Record<string, string>) {
    this.template = template
  }

  input(name: string, options: { as?: string } = {}): void {
    const value = this.template[name]
    const type = options.as === 'textarea' ? 'textarea' : 'input'

    if (type === 'input') {
      const inputTag = new Tag(type, { name: name, type: 'text', value: value })
      this.fields.push(inputTag.toString())
    } else {
      const textareaTag = new Tag(
        type,
        {
          cols: '20',
          rows: '40',
          name: name,
          as: 'textarea',
        },
        value,
      )
      this.fields.push(textareaTag.toString())
    }
  }

  toString(): string {
    return this.fields.join('')
  }
}
