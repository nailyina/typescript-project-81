type TagAttribute = {
    [key: string]: string;
};

export class Tag {
    private tagName: string;
    private tagAttributes: TagAttribute;

    constructor(tagName: string, tagAttributes: TagAttribute) {
        this.tagName = tagName;
        this.tagAttributes = tagAttributes;
    }

    public toString(): string {
        let tag = `<${this.tagName}`;

        for (const key in this.tagAttributes) {
            tag += ` ${key}="${this.tagAttributes[key]}"`;
        }

        tag += `>`;

        return tag;
    }
}
