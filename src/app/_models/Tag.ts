export class Tag {
    static readonly ANGULAR = new Tag('Angular', 'red');
    static readonly TYPESCRIPT = new Tag('Typescript', 'blue');
    static readonly PYTHON = new Tag('Python', 'darkred');

    private constructor(private readonly key: string, public readonly color: string) {

    }

    toString() {
        return this.key;
    }
}