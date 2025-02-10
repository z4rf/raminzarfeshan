export class Tag {
    static readonly ANGULAR = new Tag('Angular', 'red');
    static readonly PYTHON = new Tag('Python', 'darkgreen');
    static readonly DATA_STRUCTURE = new Tag('Data Structure', 'darkblue');
    static readonly IOS = new Tag('iOS', 'purple');
    static readonly NETWORKING = new Tag('Networking', 'blue');
    static readonly SWIFT = new Tag('Swift', 'orange');
    static readonly REACT = new Tag('React', 'lightblue');
    static readonly NODE = new Tag('Node', 'pink');
    static readonly C = new Tag('C', 'brown');
    static readonly ART = new Tag('Art', 'grey');


    private constructor(private readonly key: string, public readonly color: string) {

    }

    toString() {
        return this.key;
    }
}