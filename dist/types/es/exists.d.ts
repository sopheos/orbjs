import { AbstractFilter } from './abstract_filter';
export declare class Exists extends AbstractFilter {
    private field;
    constructor(field: string);
    static make(field: string): Exists;
    toJSON(): {
        exists: {
            field: string;
        };
    };
}
