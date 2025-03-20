import { TagAttribute } from './types'

export class Tag {
  private tagName: string
  private tagAttributes?: TagAttribute
  private value?: string

  constructor(tagName: string, tagAttributes?: TagAttribute, value?: string) {
    this.tagName = tagName
    this.tagAttributes = tagAttributes
    this.value = value
  }

  public toString(): string {
    let tag = `<${this.tagName}`

    for (const key in this.tagAttributes) {
      tag += ` ${key}="${this.tagAttributes[key]}"`
    }
    tag += `>`

    if (this.value) {
      tag += `${this.value}`
    }

    if (this.value || (this.tagAttributes && this.tagName !== 'input'))
      tag += `</${this.tagName}>`

    return tag
  }
}
