export class SeverModel{
    type: string = '';
    name:string= '';
    content: string = '';
    constructor(type: string, name: string, content: string) {
        this.type = type;
        this.name = name;
        this.content = content;
    }
}