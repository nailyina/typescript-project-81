type TagAttribute = {
    [key: string]: string;
};

export class Tag {
    private tagName: string;
    private tagAttributes?: TagAttribute;
    private value?: string;

    constructor(tagName: string, tagAttributes?: TagAttribute, value?: string) {
        this.tagName = tagName;
        this.tagAttributes = tagAttributes;
        this.value = value;
    }

    public toString(): string {
        let tag = `<${this.tagName}`;

        for (const key in this.tagAttributes) {
            tag += ` ${key}="${this.tagAttributes[key]}"`;
        }

        if (this.value) {
            tag += `>${this.value}</${this.tagName}`;
        }

        tag += `>`;

        return tag;
    }
}
