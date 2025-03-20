export class HexletCode {
  static formFor(
    template: Record<string, string>,
    options: { url?: string },
    callback: Function,
  ): string {
    const action = options.url ?? '#'
    return `<form action="${action}" method="post"></form>`
  }
}
