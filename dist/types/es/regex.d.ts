import { Term } from './term';
export declare class Regex extends Term {
    constructor(field: string, value: any);
    static make(field: string, value: any): Regex;
    flags(value: string): this;
}
