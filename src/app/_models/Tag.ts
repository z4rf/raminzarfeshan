export class Tag {
    static readonly ANGULAR = new Tag('Angular', 'red');
    static readonly PYTHON = new Tag('Python', 'darkred');
    static readonly DATA_STRUCTURE = new Tag('Data Structure', 'darkred');
    static readonly IOS = new Tag('iOS', 'darkred');
    static readonly NETWORKING = new Tag('Networking', 'darkred');
    static readonly SWIFT = new Tag('Swift', 'darkred');
    static readonly REACT = new Tag('React', 'darkred');
    static readonly NODE = new Tag('Node', 'darkred');
    static readonly C = new Tag('C', 'darkred');
    static readonly ART = new Tag('Art', 'darkred');


    private constructor(private readonly key: string, public readonly color: string) {

    }

    toString() {
        return this.key;
    }
}